import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // 创建一个SMTP传输器
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // 使用TLS
    service: 'gmail', // 使用Gmail服务
    auth: {
      user: '', // 你的Gmail地址
      pass: '',// 你的Gmail密码或应用专用密码
    },
  });

  // 邮件选项
  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER, // 发送到你的Gmail地址
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    // 发送邮件
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}