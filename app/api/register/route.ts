import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import User from "@/models/User"
import mongoose from "mongoose"
import bcrypt from "bcryptjs"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { username, email, password } = body

    await clientPromise

    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI!)
    }

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return NextResponse.json({
        success: false,
        error: "Пользователь уже существует",
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    })

    return NextResponse.json({
      success: true,
      user,
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: String(error),
    })
  }
}