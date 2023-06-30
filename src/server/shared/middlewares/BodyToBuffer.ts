export async function readBodyAsBuffer(req: any): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    let buffer = Buffer.alloc(0)
    req.setEncoding(null)
    req.on(
      "data",
      (chunk: string) => (buffer = Buffer.concat([buffer, Buffer.from(chunk)]))
    )
    req.on("end", () => resolve(buffer))
    req.on("error", reject)
  })
}