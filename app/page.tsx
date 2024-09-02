import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import Features from "@/app/ui/features";

export default function Home() {
  return (
    <>
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-8 bg-gray-200 w-screen ">
      {/* Left Section */}
      <div className="flex flex-col items-start gap-4 max-w-md">
      <p className="text-gray-600 text-sm font-bold">
      Join now 8and get 14 days of free premium membership!
        </p>
        <h2 className="text-2xl font-bold">Supercharge your LinkedIn experience</h2>
        <p className="text-gray-600">
          Optimize your profile by creating engaging content and managing your network, using the power of Cloutcraft.
        </p>
        <div className="flex gap-4">
          <Button className="bg-blue-600 text-white">Join Waitlist</Button>
          <Button className="bg-white border border-blue-600 text-blue-600">Generate Post</Button>
        </div>
        <div className="flex items-center gap-2">
          <img src="/path/to/profile1.jpg" alt="Profile 1" className="w-8 h-8 rounded-full" />
          <img src="/path/to/profile2.jpg" alt="Profile 2" className="w-8 h-8 rounded-full" />
          <div className="text-yellow-500">
            <span>★★★★★</span>
          </div>
          <span className="text-gray-500">Loved by thousands</span>
        </div>
      </div>

      {/* Right Section */}
      <Card className="flex flex-col gap-4 bg-blue-600">
        <CardHeader className="text-xl font-bold text-white">
          Generate a post
        </CardHeader>
        <CardBody>
          <Textarea placeholder="Type something..." className="text-black bg-white rounded-md p-2" />
        </CardBody>
        <CardFooter>
          <Button className="bg-white text-blue-600">Generate</Button>
        </CardFooter>
      </Card>
    </div>
    <Features/>
    </>
  );
}
