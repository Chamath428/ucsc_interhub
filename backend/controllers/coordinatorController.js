import { coordinatorSchema } from '../models/coordinatorModel.js';
import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const ViewAnnouncements = async (req, res) => {

    try {
        const announcement = await prisma.announcement.findMany({
            select: {
                title: true,
                type : true,

            }



        })
        res.status(200).send(announcement);

        console.dir(announcement, { depth: null })
    } catch (error) {
        res.status(400).send(error);
    }

}

export const ViewSystemUsers = async (req, res) => {

    // const { error, value } = coordinatorSchema.validate(req.body);


    try {
        const user = await prisma.pdc.findMany({
            select: {
                first_name: true,
                last_name: true,

                pdc_role: {
                    select: {
                        role: true,


                    },
                },


            }



        })
        res.status(200).send(user);

        console.dir(user, { depth: null })
    } catch (error) {
        res.status(400).send(error);
    }



}

