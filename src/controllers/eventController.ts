import { Request, Response } from "express";
import { prisma } from "../lib/db.js";

//1. menampilkan data
export const getAllEvents = async (req: Request, res: Response) => {
  try {
    //jika berhasil, select * from events
    const events = await prisma.event.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    //menampilkan ke user
    res.json(events);
  } catch (error) {
    //jika error
    res.status(500).json({
      message: "Gagal mengambil data",
      error,
    });
  }
};

//2. menyimpan data
export const createEvent = async (req: Request, res: Response) => {
  try {
    //jika berhasil
    const { name, categoryId, location, dateEvent, description } = req.body;

    //tambahkan validasi

    //simpan data
    const newEvent = await prisma.event.create({
      data: {
        name,
        categoryId,
        location,
        dateEvent: new Date(dateEvent),
        description,
      },
    });

    //kasih tau ke user
    res.status(201).json({
      message: "Data event berhasil disimpan",
      data: newEvent,
    });
  } catch (error) {
    //jika ada error
    res.status(500).json({ message: "Gagal membuat event", error });
  }
};

//3. menampilkan data berdasarkan id
export const eventById = (req: Request, res: Response) => {};

//4. mengupdate data berdasarkan id
export const updateById = (req: Request, res: Response) => {};

//5. menghapus data berdasarkan id
export const deleteById = (req: Request, res: Response) => {};
