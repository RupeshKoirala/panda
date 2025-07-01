"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Ban, Coins, Smile, Shield, BookOpen, Rocket, MessageSquare, Copy } from "lucide-react"
import { FaTelegram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"

const features = [
  {
    title: "Community-Driven Fun",
    icon: Users,
    description:
      "$PANDA is more than just a token—it's a community-driven movement. Join a passionate and growing community of crypto enthusiasts who value fun, engagement, and memes while building something unique.",
  },
  {
    title: "Zero Taxes, Zero Hassle",
    icon: Ban,
    description:
      "Unlike other tokens, $PANDA has no hidden fees or transaction taxes. What you trade is what you get—keeping it simple and accessible for everyone.",
  },
  {
    title: "Liquidity Rewards",
    icon: Coins,
    description:
      "Participate in Uniswap's Panda liquidity pool and earn attractive commissions. Your contributions help grow the ecosystem while rewarding you for your support.",
  },
  {
    title: "Meme Culture Meets Crypto",
    icon: Smile,
    description:
      "$PANDA isn't just a token; it's a symbol of the playful and vibrant world of memes, combined with the power of blockchain technology. It's a token that brings joy while embracing innovation.",
  },
  {
    title: "Transparent and Open",
    icon: Shield,
    description:
      "With $PANDA, what you see is what you get. There's no hidden team or agenda. The project is driven by the community, for the community, ensuring fairness and transparency.",
  },
  {
    title: "Easy to Get Started",
    icon: BookOpen,
    description:
      "Whether you're a crypto pro or a beginner, buying $PANDA is made simple with step-by-step instructions to guide you through the process.",
  },
  {
    title: "Future Potential",
    icon: Rocket,
    description:
      "$PANDA is not just another meme coin; it's a movement aimed at building a loyal community, exciting partnerships, and potential expansions, making it a promising choice for long-term believers.",
  },
  {
    title: "No False Promises",
    icon: MessageSquare,
    description:
      "$PANDA keeps it real—no overpromising or unrealistic hype. It's a token made for entertainment, community bonding, and fun, with no pressure to overdeliver.",
  },
]

export default function Home() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText("0xb08B45F6d8D81DD7B3223408b1F2aF3a4ea4e02d")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Panda-HoxVZp9MJzXn02T2VIpk0iWn7DXGCN.png"
              alt="Panda Token Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#home" className="text-gray-600 hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="#tokenomics" className="text-gray-600 hover:text-green-600 transition-colors">
              Tokenomics
            </Link>
            <Link href="#features" className="text-gray-600 hover:text-green-600 transition-colors">
              Why $PANDA
            </Link>
            <Link href="#how-to-buy" className="text-gray-600 hover:text-green-600 transition-colors">
              How To Buy
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-green-600 transition-colors">
              FAQs
            </Link>
            <Link href="#community" className="text-gray-600 hover:text-green-600 transition-colors">
              Community
            </Link>
          </nav>
          <Link
            href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xb08B45F6d8D81DD7B3223408b1F2aF3a4ea4e02d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-green-500 to-yellow-500 text-white hover:from-green-600 hover:to-yellow-600 font-semibold">
              Buy Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Home Section - Gradient */}
        <section
          id="home"
          className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-green-500/80 to-yellow-500/80"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex justify-center mb-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Panda-HoxVZp9MJzXn02T2VIpk0iWn7DXGCN.png"
                  alt="Panda Token Logo"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl drop-shadow-xl">
                The Next Generation Meme Coin $PANDA
              </h1>
              <p className="mt-6 text-lg leading-8 text-white font-medium drop-shadow-md">
                $PANDA token is a make-your-dream-come-true token that you can hold on to for a long time in your life.
                Hop on board and join the ride right now! $PANDA to the stars!
              </p>
              <div className="mt-10 flex items-center justify-center gap-6 flex-wrap">
                <Link
                  href="https://coinmarketcap.com/dexscan/ethereum/0x6fbadeea0c70f83dbecfafbb83df6fac1813f7a6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-lg text-green-600 font-medium transition-transform hover:scale-105 bg-white shadow-lg w-[280px] h-[60px]"
                >
                  <Image
                    src="https://seeklogo.com/images/C/coinmarketcap-logo-064D167A0E-seeklogo.com.png"
                    alt="CoinMarketCap"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                  <span className="text-xl font-semibold whitespace-nowrap">View on CMC</span>
                </Link>
                <Link
                  href="https://www.dextools.io/app/en/ether/pair-explorer/0x6fbadeea0c70f83dbecfafbb83df6fac1813f7a6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-lg text-green-600 font-medium transition-transform hover:scale-105 bg-white shadow-lg w-[280px] h-[60px]"
                >
                  <Image
                    src="https://cdn.worldvectorlogo.com/logos/dextools.svg"
                    alt="DexTools"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                  <span className="text-xl font-semibold whitespace-nowrap">View on DexTools</span>
                </Link>
                <Link
                  href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xb08B45F6d8D81DD7B3223408b1F2aF3a4ea4e02d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-lg text-green-600 font-medium transition-transform hover:scale-105 bg-white shadow-lg w-[280px] lg:w-[576px] h-[60px]"
                >
                  <span className="text-xl font-semibold whitespace-nowrap">BUY $PANDA</span>
                </Link>
                {/* Add contract address display */}
                <div className="w-full flex flex-col items-center justify-center gap-2 mt-4">
                  <h3 className="text-white font-bold text-xl">Contract Address</h3>
                  <div className="flex items-center gap-2">
                    <code className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white font-bold text-sm sm:text-base font-mono">
                      0xb08B45F6d8D81DD7B3223408b1F2aF3a4ea4e02d
                    </code>
                    <button
                      onClick={copyToClipboard}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                      title="Copy to clipboard"
                    >
                      <Copy className={`h-5 w-5 ${copied ? "text-yellow-200" : "text-white"}`} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tokenomics Overview - White */}
        <section className="py-24 bg-white" id="tokenomics">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                  TOKENOMICS
                </span>
              </h2>
              <p className="mt-4 text-xl text-gray-700">Token Distribution Breakdown</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="flex justify-center px-4 sm:px-0">
                <div className="relative w-full max-w-md">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Panda%20(2)-TTkvqv5mDSGtQnuMP8AADn55IOyhTF.png"
                    alt="Token Distribution Chart"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="space-y-8 px-4 sm:px-6 lg:px-0">
                <div className="grid grid-cols-[1fr,auto] gap-4 items-start pb-4 border-b border-gray-200 px-2 sm:px-0">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      Presale (40%)
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Designed to provide early adopters with access to the token and generate initial funding for the
                      project.
                    </p>
                  </div>
                  <div className="text-2xl font-bold text-gray-800">40%</div>
                </div>
                <div className="grid grid-cols-[1fr,auto] gap-4 items-start pb-4 border-b border-gray-200 px-2 sm:px-0">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      Ecosystem & Rewards (30%)
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Includes incentives, airdrops, staking rewards, and operational costs to support the network's
                      growth and sustainability.
                    </p>
                  </div>
                  <div className="text-2xl font-bold text-gray-800">30%</div>
                </div>
                <div className="grid grid-cols-[1fr,auto] gap-4 items-start pb-4 border-b border-gray-200 px-2 sm:px-0">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-300"></div>
                      Liquidity Pool (20%)
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Locked for 3 years to ensure stable trading and build trust in the ecosystem.
                    </p>
                  </div>
                  <div className="text-2xl font-bold text-gray-800">20%</div>
                </div>
                <div className="grid grid-cols-[1fr,auto] gap-4 items-start pb-4 border-b border-gray-200 px-2 sm:px-0">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-200"></div>
                      Marketing & Growth (5%)
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Allocated for marketing campaigns, partnerships, and driving global awareness of the $PANDA token.
                    </p>
                  </div>
                  <div className="text-2xl font-bold text-gray-800">5%</div>
                </div>
                <div className="grid grid-cols-[1fr,auto] gap-4 items-start pb-4 px-2 sm:px-0">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-100"></div>
                      Team & Development (5%)
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Locked for 2 years to ensure team commitment and support for the project's long-term growth.
                    </p>
                  </div>
                  <div className="text-2xl font-bold text-gray-800">5%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Gradient */}
        <section id="features" className="relative py-24 bg-gradient-to-br from-green-500/80 to-yellow-500/80">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold tracking-tight text-white drop-shadow-xl">
                Why Choose $PANDA Token?
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
                    <Accordion type="single" collapsible>
                      <AccordionItem value={`item-${index}`} className="border-none">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-white/10">
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-white text-left">{feature.title}</h3>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <p className="text-white/90 font-medium">{feature.description}</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* How to Buy Section - White */}
        <section id="how-to-buy" className="py-24 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                  How to Buy $PANDA
                </span>
              </h2>
              <p className="text-xl text-gray-600">To buy $PANDA, follow these simple steps:</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Step 1</h3>
                <p className="text-gray-600">
                  Download and set up a compatible wallet, such as MetaMask, Coinbase Web3 Wallet, or Trust Wallet.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Step 2</h3>
                <p className="text-gray-600">
                  Purchase Ethereum (ETH) on a crypto currency exchange and transfer it to your wallet.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Step 3</h3>
                <p className="text-gray-600">
                  Go to decentralized exchange{" "}
                  <Link
                    href="https://uniswap.org"
                    className="text-green-600 hover:text-green-700 font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Uniswap.org
                  </Link>{" "}
                  and connect your wallet via wallet connect.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 lg:col-span-2">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Step 4</h3>
                <p className="text-gray-600">
                  Select $PANDA as the desired token and enter the amount you'd like to buy. The official token address
                  to import is{" "}
                  <span className="relative inline-flex items-center">
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded text-sm">
                      0xb08B45F6d8D81DD7B3223408b1F2aF3a4ea4e02d
                    </span>
                    <button
                      onClick={copyToClipboard}
                      className="ml-2 p-1 hover:bg-gray-100 rounded-md transition-colors"
                      title="Copy to clipboard"
                    >
                      <Copy className={`h-4 w-4 ${copied ? "text-green-500" : "text-gray-500"}`} />
                    </button>
                  </span>
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Step 5</h3>
                <p className="text-gray-600">
                  Review the transaction details, confirm the swap, and enjoy your $PANDA!
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500 text-center mt-8">
              *Please note that trading fees and slippage may apply during the purchase process.
            </p>
          </div>
        </section>

        {/* FAQ Section - Gradient */}
        <section id="faq" className="relative py-24 bg-gradient-to-br from-green-500/80 to-yellow-500/80">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white drop-shadow-xl">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-white/10 backdrop-blur-sm rounded-lg border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <h3 className="text-lg font-bold text-white text-left">What is $PANDA Coin?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-white/90 font-medium">
                      $PANDA is a community-driven meme token designed for fun, engagement, and rewards. It combines
                      meme culture with blockchain technology to create a vibrant and loyal community.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white/10 backdrop-blur-sm rounded-lg border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <h3 className="text-lg font-bold text-white text-left">What is the purpose of $PANDA Coin?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-white/90 font-medium">
                      $PANDA Coin aims to foster community-driven growth while offering holders rewards through staking,
                      liquidity incentives, and engaging community activities.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white/10 backdrop-blur-sm rounded-lg border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <h3 className="text-lg font-bold text-white text-left">How do I buy $PANDA Coin?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <ul className="text-white/90 font-medium list-disc pl-6 space-y-2">
                      <li>Download a compatible wallet (e.g., MetaMask, Trust Wallet)</li>
                      <li>Purchase Ethereum (ETH) on a crypto exchange and transfer it to your wallet</li>
                      <li>Visit Uniswap.org to swap ETH for $PANDA</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-white/10 backdrop-blur-sm rounded-lg border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <h3 className="text-lg font-bold text-white text-left">
                      What wallet should I use to store $PANDA?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-white/90 font-medium">
                      Compatible wallets include MetaMask, Trust Wallet, and other wallets that support ERC20 tokens.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-white/10 backdrop-blur-sm rounded-lg border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <h3 className="text-lg font-bold text-white text-left">
                      What makes $PANDA unique compared to other meme coins?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-white/90 font-medium">
                      $PANDA stands out as a symbol of Chinese culture that many people love 😍, along with its
                      dedicated and vibrant community.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="bg-white/10 backdrop-blur-sm rounded-lg border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <h3 className="text-lg font-bold text-white text-left">Has $PANDA Coin been audited?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-white/90 font-medium">
                      $PANDA is committed to transparency and plans to undergo a security audit from a trusted
                      third-party auditor. Updates will be shared with the community.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Community Section - White */}
        <section id="community" className="py-24 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                  Community
                </span>
              </h2>
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-gray-600 mb-8">
                Follow us on Twitter and Facebook, join our Telegram, and subscribe to our YouTube channel to stay
                updated and interact with the $PANDA community.
              </p>
              <div className="flex justify-center space-x-6 mb-12">
                <Link
                  href="https://www.facebook.com/Pandatothestars/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-500 transition-colors"
                >
                  <FaFacebook className="w-8 h-8" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://t.me/te1234456778888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-500 transition-colors"
                >
                  <FaTelegram className="w-8 h-8" />
                  <span className="sr-only">Telegram</span>
                </Link>
                <Link
                  href="https://x.com/hexpandatoken"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-500 transition-colors"
                >
                  <FaTwitter className="w-8 h-8" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="https://www.youtube.com/@Pandacoinnews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-500 transition-colors"
                >
                  <FaYoutube className="w-8 h-8" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
              <div className="space-y-6 text-left">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Roadmap</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Q1 2025: Community-building campaigns, partnerships, and staking rewards.</li>
                    <li>Q2 2025: Explore NFT integration and global marketing initiatives.</li>
                    <li>Q3 2025: Launch of new utility features and expanded ecosystem rewards.</li>
                  </ul>
                </div>
                <p className="text-gray-600">
                  You can contribute by spreading the word, joining community discussions, participating in airdrops,
                  and providing feedback for future developments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer - Gradient */}
        <footer className="py-12 bg-gradient-to-br from-green-500/80 to-yellow-500/80 relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Panda-HoxVZp9MJzXn02T2VIpk0iWn7DXGCN.png"
                alt="Panda Token Logo"
                width={40}
                height={40}
                className="mx-auto mb-4"
              />
              <p className="text-sm text-white font-medium mb-4">
                Disclaimer: $PANDA is a meme coin with no intrinsic value or expectation of financial return. There is
                no formal team or roadmap. The coin is for entertainment purposes only. The content on this website is
                for informational purposes only and does not constitute financial, investment, or other professional
                advice. Investing in cryptocurrencies carries inherent risks, and you should perform your own research
                before making any decisions. Not responsible for any losses or damages that may occur as a result of
                using the information provided on this website.
              </p>
              <p className="text-sm text-white font-medium">© 2025 $PANDA.</p>
              <p className="text-sm text-white font-medium">
                Created by projectelevatebiz@gmail.com </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

