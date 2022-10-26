import jwt from 'jsonwebtoken';

let refreshToekns =[];

export const getNewAccessToken = async(req,res) =>{
    const refreshToekn = req.body.refreshToekn;
    console.log(refreshToekns[0]);

    // check whether there is a refresh token has
    if(!refreshToekn){
        return res.status(401).json({message:"You are not authenticated!"});
    }
    // if(!refreshToekns.includes(refreshToekn)){
    //     return res.status(403).json({message:"Refresh token is not in the token list!"});
    // }
    jwt.verify(refreshToekn,"TheRefreshSecrectKey",(err)=>{
        if(err) return res.status(401).json({message:"Refresh token is invalide!"})
        
        refreshToekns=refreshToekns.filter((token)=>token!==refreshToekn);

        const newAccessToken = generateAccessToken(req.body.username,req.body.role);
        const newRefreshToekn = generateRefreshToken(req.body.username,req.body.role);

        res.status(200).send([newAccessToken,newRefreshToekn])
    });
}

export const generateAccessToken = (username,userRole) =>{
    const accessToken = jwt.sign({id:username,role:userRole},
                                "TheSecrectKey",
                                {expiresIn:"145m"});
    
    return accessToken;
}

export const generateRefreshToken =(username,userRole) =>{
    const refreshToekn = jwt.sign({id:username,role:userRole},
        "TheRefreshSecrectKey",
        {expiresIn:"40m"});
    refreshToekns.push(refreshToekn);
    console.log(refreshToekns[0]);
    return refreshToekn;
}

export const terminateRefreshToken = (refreshToekn)=>{
    refreshToekns=refreshToekns.filter((token)=>token!==refreshToekn);
}
