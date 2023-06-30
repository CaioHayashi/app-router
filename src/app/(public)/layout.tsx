import { inter } from "../layout"

export const metadata = {
    title: 'Login - Next 13'
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return(
        <html>
            <body className={inter.className}>
                <h2>Next 13 - (Public)</h2>
                <hr />
                {children}
            </body>
        </html>
    )
}