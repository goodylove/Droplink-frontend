// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   Music,
//   Share2,
//   Users,
//   BarChart3,
//   Smartphone,
//   Instagram,
//   AirplayIcon as Spotify,
//   Check,
//   Star,
//   Play,
//   ArrowRight,
//   Zap,
// } from "lucide-react";

// export default function LandingPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#a259ff] via-[#2f80ed] to-indigo-900">
//       {/* Navigation */}
//       <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-2">
//               <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-[#a259ff] to-[#2f80ed] flex items-center justify-center">
//                 <Music className="h-5 w-5 text-white" />
//               </div>
//               <span className="text-xl font-bold text-white">Droplink</span>
//             </div>
//             <div className="hidden md:flex items-center space-x-6">
//               <Link
//                 href="#features"
//                 className="text-white/80 hover:text-white transition-colors"
//               >
//                 Features
//               </Link>
//               <Link
//                 href="#how-it-works"
//                 className="text-white/80 hover:text-white transition-colors"
//               >
//                 How it Works
//               </Link>
//               <Link
//                 href="#pricing"
//                 className="text-white/80 hover:text-white transition-colors"
//               >
//                 Pricing
//               </Link>
//               <Button
//                 variant="outline"
//                 className="border-white/20 text-white hover:bg-white/10"
//               >
//                 Sign In
//               </Button>
//               <Button className="bg-gradient-to-r from-[#a259ff] to-[#2f80ed] hover:from-[#9147ff] hover:to-[#2670d4]">
//                 Get Started
//               </Button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto text-center">
//           <Badge className="mb-6 bg-purple-500/20 text-purple-200 border-purple-500/30">
//             🎵 Built for Music Artists
//           </Badge>
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
//             One Link for
//             <span className="bg-gradient-to-r from-[#a259ff] to-[#2f80ed] bg-clip-text text-transparent">
//               {" "}
//               All Your Music
//             </span>
//           </h1>
//           <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
//             Share your entire music catalog, social media, and streaming
//             platforms with one powerful link. Perfect for Instagram bios, email
//             signatures, and everywhere your fans discover you.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//             <Button
//               size="lg"
//               className="bg-gradient-to-r from-[#a259ff] to-[#2f80ed] hover:from-[#9147ff] hover:to-[#2670d4] text-lg px-8 py-3"
//             >
//               Create Your Link Free
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-3"
//             >
//               <Play className="mr-2 h-5 w-5" />
//               Watch Demo
//             </Button>
//           </div>

//           {/* Hero Image/Demo */}
//           <div className="relative max-w-4xl mx-auto">
//             <div className="bg-gradient-to-r from-[#a259ff]/20 to-[#2f80ed]/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
//               <div className="bg-black/40 rounded-xl p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#a259ff] to-[#2f80ed]"></div>
//                     <div>
//                       <h3 className="text-white font-semibold">@alexmusic</h3>
//                       <p className="text-white/60 text-sm">
//                         Electronic Producer
//                       </p>
//                     </div>
//                   </div>
//                   <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
//                     Live
//                   </Badge>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <Card className="bg-white/5 border-white/10">
//                     <CardContent className="p-4">
//                       <div className="flex items-center space-x-3">
//                         <Spotify className="h-8 w-8 text-green-500" />
//                         <div>
//                           <p className="text-white font-medium">Latest Album</p>
//                           <p className="text-white/60 text-sm">
//                             Midnight Vibes
//                           </p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                   <Card className="bg-white/5 border-white/10">
//                     <CardContent className="p-4">
//                       <div className="flex items-center space-x-3">
//                         <Instagram className="h-8 w-8 text-pink-500" />
//                         <div>
//                           <p className="text-white font-medium">Instagram</p>
//                           <p className="text-white/60 text-sm">@alexmusic</p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-20 px-4 bg-black/20">
//         <div className="container mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-white mb-4">
//               Everything You Need in One Place
//             </h2>
//             <p className="text-xl text-white/80 max-w-2xl mx-auto">
//               Powerful features designed specifically for music artists to
//               showcase their work and grow their fanbase.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
//               <CardHeader>
//                 <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#a259ff] to-[#2f80ed] flex items-center justify-center mb-4">
//                   <Music className="h-6 w-6 text-white" />
//                 </div>
//                 <CardTitle className="text-white">
//                   Music Streaming Links
//                 </CardTitle>
//                 <CardDescription className="text-white/70">
//                   Connect all your streaming platforms - Spotify, Apple Music,
//                   SoundCloud, and more.
//                 </CardDescription>
//               </CardHeader>
//             </Card>

//             <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
//               <CardHeader>
//                 <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#2f80ed] to-cyan-500 flex items-center justify-center mb-4">
//                   <Share2 className="h-6 w-6 text-white" />
//                 </div>
//                 <CardTitle className="text-white">Social Media Hub</CardTitle>
//                 <CardDescription className="text-white/70">
//                   Showcase your Instagram, TikTok, Twitter, and YouTube all in
//                   one place.
//                 </CardDescription>
//               </CardHeader>
//             </Card>

//             <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
//               <CardHeader>
//                 <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4">
//                   <BarChart3 className="h-6 w-6 text-white" />
//                 </div>
//                 <CardTitle className="text-white">
//                   Analytics & Insights
//                 </CardTitle>
//                 <CardDescription className="text-white/70">
//                   Track clicks, engagement, and see which platforms drive the
//                   most traffic.
//                 </CardDescription>
//               </CardHeader>
//             </Card>

//             <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
//               <CardHeader>
//                 <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-4">
//                   <Smartphone className="h-6 w-6 text-white" />
//                 </div>
//                 <CardTitle className="text-white">Mobile Optimized</CardTitle>
//                 <CardDescription className="text-white/70">
//                   Perfect experience on all devices where your fans discover
//                   your music.
//                 </CardDescription>
//               </CardHeader>
//             </Card>

//             <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
//               <CardHeader>
//                 <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mb-4">
//                   <Zap className="h-6 w-6 text-white" />
//                 </div>
//                 <CardTitle className="text-white">Instant Updates</CardTitle>
//                 <CardDescription className="text-white/70">
//                   Add new releases, update social links, and make changes
//                   instantly.
//                 </CardDescription>
//               </CardHeader>
//             </Card>

//             <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
//               <CardHeader>
//                 <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#a259ff] to-purple-500 flex items-center justify-center mb-4">
//                   <Users className="h-6 w-6 text-white" />
//                 </div>
//                 <CardTitle className="text-white">Fan Engagement</CardTitle>
//                 <CardDescription className="text-white/70">
//                   Direct fans to your latest releases, merch, and upcoming
//                   shows.
//                 </CardDescription>
//               </CardHeader>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section id="how-it-works" className="py-20 px-4">
//         <div className="container mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-white mb-4">
//               Get Started in Minutes
//             </h2>
//             <p className="text-xl text-white/80 max-w-2xl mx-auto">
//               Three simple steps to create your professional music link page.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#a259ff] to-[#2f80ed] flex items-center justify-center mx-auto mb-6">
//                 <span className="text-2xl font-bold text-white">1</span>
//               </div>
//               <h3 className="text-xl font-semibold text-white mb-4">
//                 Upload Your Music
//               </h3>
//               <p className="text-white/70">
//                 Add links to your songs on Spotify, Apple Music, SoundCloud, and
//                 other platforms.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#2f80ed] to-cyan-500 flex items-center justify-center mx-auto mb-6">
//                 <span className="text-2xl font-bold text-white">2</span>
//               </div>
//               <h3 className="text-xl font-semibold text-white mb-4">
//                 Connect Social Media
//               </h3>
//               <p className="text-white/70">
//                 Link your Instagram, TikTok, Twitter, YouTube, and other social
//                 profiles.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
//                 <span className="text-2xl font-bold text-white">3</span>
//               </div>
//               <h3 className="text-xl font-semibold text-white mb-4">
//                 Share Your Link
//               </h3>
//               <p className="text-white/70">
//                 Get your custom Droplink URL and share it everywhere your fans
//                 can find you.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 px-4 bg-black/20">
//         <div className="container mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-white mb-4">
//               Loved by Artists Worldwide
//             </h2>
//             <p className="text-xl text-white/80">
//               See what musicians are saying about Droplink
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <Card className="bg-white/5 border-white/10">
//               <CardContent className="p-6">
//                 <div className="flex items-center mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="h-5 w-5 text-yellow-400 fill-current"
//                     />
//                   ))}
//                 </div>
//                 <p className="text-white/80 mb-4">
//                   "Droplink changed how I share my music. One link in my bio now
//                   leads to everything - my latest tracks, socials, and merch
//                   store."
//                 </p>
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#a259ff] to-[#2f80ed] mr-3"></div>
//                   <div>
//                     <p className="text-white font-semibold">Sarah Chen</p>
//                     <p className="text-white/60 text-sm">Indie Pop Artist</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="bg-white/5 border-white/10">
//               <CardContent className="p-6">
//                 <div className="flex items-center mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="h-5 w-5 text-yellow-400 fill-current"
//                     />
//                   ))}
//                 </div>
//                 <p className="text-white/80 mb-4">
//                   "The analytics feature is incredible. I can see exactly which
//                   platforms my fans prefer and adjust my strategy accordingly."
//                 </p>
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#2f80ed] to-cyan-500 mr-3"></div>
//                   <div>
//                     <p className="text-white font-semibold">Marcus Rodriguez</p>
//                     <p className="text-white/60 text-sm">Hip-Hop Producer</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="bg-white/5 border-white/10">
//               <CardContent className="p-6">
//                 <div className="flex items-center mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="h-5 w-5 text-yellow-400 fill-current"
//                     />
//                   ))}
//                 </div>
//                 <p className="text-white/80 mb-4">
//                   "Super easy to set up and looks professional. My fans love
//                   having everything in one place instead of hunting for links."
//                 </p>
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mr-3"></div>
//                   <div>
//                     <p className="text-white font-semibold">Emma Thompson</p>
//                     <p className="text-white/60 text-sm">Singer-Songwriter</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Pricing */}
//       <section id="pricing" className="py-20 px-4">
//         <div className="container mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-white mb-4">
//               Simple, Transparent Pricing
//             </h2>
//             <p className="text-xl text-white/80">
//               Choose the plan that fits your music career
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             <Card className="bg-white/5 border-white/10">
//               <CardHeader>
//                 <CardTitle className="text-white text-2xl">Free</CardTitle>
//                 <CardDescription className="text-white/70">
//                   Perfect for getting started
//                 </CardDescription>
//                 <div className="text-4xl font-bold text-white mt-4">
//                   $0<span className="text-lg font-normal">/month</span>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-3">
//                   <li className="flex items-center text-white/80">
//                     <Check className="h-5 w-5 text-green-400 mr-3" />
//                     Up to 5 links
//                   </li>
//                   <li className="flex items-center text-white/80">
//                     <Check className="h-5 w-5 text-green-400 mr-3" />
//                     Basic analytics
//                   </li>
//                   <li className="flex items-center text-white/80">
//                     <Check className="h-5 w-5 text-green-400 mr-3" />
//                     Mobile optimized
//                   </li>
//                 </ul>
//                 <Button className="w-full mt-6 bg-white/10 hover:bg-white/20 text-white border border-white/20">
//                   Get Started Free
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="bg-gradient-to-b from-[#a259ff]/20 to-[#2f80ed]/20 border-[#a259ff]/30 relative">
//               <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#a259ff] to-[#2f80ed]">
//                 Most Popular
//               </Badge>
//               <CardHeader>
//                 <CardTitle className="text-white text-2xl">Pro</CardTitle>
//                 <CardDescription className="text-white/70">
//                   For serious musicians
//                 </CardDescription>
//                 <div className="text-4xl font-bold text-white mt-4">
//                   $9<span className="text-lg font-normal">/month</span>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-3">
//                   <li className="flex items-center text-white/80">
//                     <Check className="h-5 w-5 text-green-400 mr-3" />
//                     Unlimited links
//                   </li>
//                   <li className="flex items-center text-white/80">
//                     <Check className="h-5 w-5 text-green-400 mr-3" />
//                     Advanced analytics
//                   </li>
//                   <li className="flex items-center text-white/80">
//                     <Check className="h-5 w-5 text-green-400 mr-3" />
//                     Custom domain
//                   </li>
//                   <li className="flex items-center text-white/80">
//                     <Check className="h-5 w-5 text-green-400 mr-3" />
//                     Priority support
//                   </li>
//                 </ul>
//                 <Button className="w-full mt-6 bg-gradient-to-r from-[#a259ff] to-[#2f80ed] hover:from-[#9147ff] hover:to-[#2670d4]">
//                   Start Pro Trial
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="bg-white/5 border-white/10">
//               <CardHeader>
//                 <CardTitle className="text-white text-2xl">
//                   Enterprise
//                 </CardTitle>
//                 <CardDescription className="text-white/70">
//                   For labels and agencies
//                 </CardDescription>
//                 <div className="text-4xl font-bold text-white mt-4">
//                   $29<span className="text-lg font-normal">/month</span>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-3">
//                   <li className="flex items-center text-white/80">
//                     <Check className="h-5 w-5 text-green-400 mr-3" />
//                     Multiple artists
//                   </li>
//                   <li className="flex items-center text-white/80">
//                     <Check className="h-5 w-5 text-green-400 mr-3" />
//                     Team collaboration
//                   </li>
//                   <li className="flex items-center text-white/80">
//                     <Check className="h-5 w-5 text-green-400 mr-3" />
//                     White-label options
//                   </li>
//                   <li className="flex items-center text-white/80">
//                     <Check className="h-5 w-5 text-green-400 mr-3" />
//                     Dedicated support
//                   </li>
//                 </ul>
//                 <Button className="w-full mt-6 bg-white/10 hover:bg-white/20 text-white border border-white/20">
//                   Contact Sales
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 bg-gradient-to-r from-[#a259ff]/20 to-[#2f80ed]/20">
//         <div className="container mx-auto text-center">
//           <h2 className="text-4xl font-bold text-white mb-6">
//             Ready to Amplify Your Music?
//           </h2>
//           <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
//             Join thousands of artists who are already using Droplink to grow
//             their fanbase and streamline their online presence.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button
//               size="lg"
//               className="bg-gradient-to-r from-[#a259ff] to-[#2f80ed] hover:from-[#9147ff] hover:to-[#2670d4] text-lg px-8 py-3"
//             >
//               Create Your Link Now
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-3"
//             >
//               View Examples
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-white/10 bg-black/40 py-12 px-4">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-[#a259ff] to-[#2f80ed] flex items-center justify-center">
//                   <Music className="h-5 w-5 text-white" />
//                 </div>
//                 <span className="text-xl font-bold text-white">Droplink</span>
//               </div>
//               <p className="text-white/70">
//                 The ultimate link-in-bio tool designed specifically for music
//                 artists.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-white font-semibold mb-4">Product</h4>
//               <ul className="space-y-2">
//                 <li>
//                   <Link href="#" className="text-white/70 hover:text-white">
//                     Features
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-white/70 hover:text-white">
//                     Pricing
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-white/70 hover:text-white">
//                     Examples
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-white/70 hover:text-white">
//                     API
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-white font-semibold mb-4">Support</h4>
//               <ul className="space-y-2">
//                 <li>
//                   <Link href="#" className="text-white/70 hover:text-white">
//                     Help Center
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-white/70 hover:text-white">
//                     Contact Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-white/70 hover:text-white">
//                     Community
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-white/70 hover:text-white">
//                     Status
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-white font-semibold mb-4">Company</h4>
//               <ul className="space-y-2">
//                 <li>
//                   <Link href="#" className="text-white/70 hover:text-white">
//                     About
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-white/70 hover:text-white">
//                     Blog
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-white/70 hover:text-white">
//                     Careers
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-white/70 hover:text-white">
//                     Privacy
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-white/10 mt-8 pt-8 text-center">
//             <p className="text-white/70">
//               © 2024 Droplink. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
