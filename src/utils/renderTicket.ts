
import { createCanvas, loadImage } from 'canvas'
import path from 'path'

export async function renderTicketWithQR({
  userName,
  qrCodeBase64,
}: {
  userName: string,
  qrCodeBase64: string
}): Promise<Buffer> {
  
  const templatePath = path.join(process.cwd(), 'public/template/Eventpass.jpg')
  const template = await loadImage(templatePath)
  const qrImage = await loadImage(Buffer.from(qrCodeBase64, 'base64'))

  const canvas = createCanvas(template.width, template.height)
  const ctx = canvas.getContext('2d')

  // Draw base template
  ctx.drawImage(template, 0, 0)

  // Draw Name
  ctx.fillStyle = '#FFFFFF'
  ctx.font = 'bold 1000px Arial' // Updated font size
  ctx.fillText(userName, 85, 2456) // Updated coordinates

  // Draw QR Code
  ctx.drawImage(qrImage, 1610, 2599, 480, 480) // Updated coordinates and size

  return canvas.toBuffer('image/png')
}