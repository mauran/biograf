import './globals.css'

export const metadata = {
  title: 'Biograf',
  description: 'Se danske streamingtjenester i fuld skærm fra din Tesla',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
