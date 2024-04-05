import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Toaster } from '@/components/ui/toaster'
import { Archivo_Black } from 'next/font/google'

import './globals.css'

export const metadata: Metadata = {
	title: 'TaterDash',
	description: 'Food Delivery platform',
}

const archivo = Archivo_Black({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-archivo',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className={archivo.variable}>
			<body className={`${GeistSans.className} antialiased`}>
				{children}
				<Toaster />
			</body>
		</html>
	)
}
