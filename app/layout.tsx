import './globals.scss';
import './mobile.scss';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';

import Link from "next/link";

import favicon from '../public/favicon.ico';

import { HeaderRD } from "./components/header";
import { FooterRD } from "./components/footer";

const inter = Inter({ subsets: ['latin'] })
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata = {
  title: 'Retrodoges',
  description: 'retrodoges yo!'
}

export default function RootLayout ({children,}: {children: React.ReactNode}) {

  return (

    <html lang="en">

    <head>
      <link rel="shortcut icon" type="image/x-icon" href={favicon.src} />
      <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com"  />
      <link href="https://fonts.googleapis.com/css2?family=Jura&family=Montserrat+Alternates&display=swap" rel="stylesheet"/>

      <meta property="og:url" content="https://retrodoges.com/"/>
      <meta property="og:url" content="https://retrodoges.com/"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="R E T R O D O G E S"/>
      <meta property="og:description" content="retrodoges yo!"></meta>
      <meta property="og:image" content="/mintingnow.jpg"/>

      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="twitter:domain" content="retrodoges.com"/>
      <meta property="twitter:url" content="https://retrodoges.com/"/>
      <meta property="twitter:domain" content="retrodoges.com"/>
      <meta property="twitter:url" content="https://retrodoges.com/"/>
      <meta name="twitter:title" content="Retrodoges"/>
      <meta name="twitter:description" content="retrodoges yo!"></meta>
      <meta name="twitter:image" content="/mintingnow.jpg"/>
      
    </head>

        <body className={inter.className}>

        <main className="flex min-h-screen items-center justify-between ">
       
            <div className="container">

              <HeaderRD />
              
              {children}

              
            
            </div>
            
        </main>
        <FooterRD />
        </body>

    </html>
  )
}
