import { Button, Input, Link, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import nodeSetup from "../public/nodeSetup.png";
import i from "../public/i.png";
import wallet from "../public/wallet.png";
import SidebarLayout from "@/components/Sidebar";

export default function Home() {
  const name = "Chris";
  return (
    <SidebarLayout>
      <div className="flex justify-evenly space-x-4 pt-12">
        <div className="w-4/12 px-8 text-white">
          <div className="space-y-2">
            <h3 className="text-sm">Hey {name},</h3>
            <h1 className="text-2xl font-semibold">Welcome 👋🏻 </h1>
          </div>
          <hr className="my-4" />
          <div className="my-4">
            <div className="my-2 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="h-8 w-8 bg-primary-foreground flex justify-center items-center rounded">
                  <Image src={nodeSetup} alt="nodeSetup" />
                </div>
                <h1 className="my-4">Node Setup</h1>
              </div>
              <Tooltip content="I am a tooltip">
                <Image src={i} alt="?" width={15} />
              </Tooltip>
            </div>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="http(s) Node Link"
                radius="sm"
                className="bg-background-foreground text-white -md"
                variant="bordered"
              />
              <Input
                type="email"
                placeholder="Websocket Node Link"
                className="bg-background-foreground text-white rounded-md"
                variant="bordered"
                radius="sm"
              />
              <Button
                variant="bordered"
                className="text-white hover:bg-primary-foreground"
                fullWidth
                radius="sm"
                size="md"
              >
                Submit
              </Button>
            </div>
            <Link
              href=""
              underline="always"
              className="block text-center text-white hover:text-primary"
              size="sm"
            >
              Change Node
            </Link>
          </div>
          <hr className="my-4" />
          <div className="my-4">
            <div className="my-2 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="h-8 w-8 bg-primary-foreground flex justify-center items-center rounded">
                  <Image src={nodeSetup} alt="Priority Fees" />
                </div>
                <h1 className="my-4">Priority Fees</h1>
              </div>
              <Tooltip content="I am a tooltip">
                <Image src={i} alt="?" width={15} />
              </Tooltip>
            </div>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Sell Fee"
                className="bg-background-foreground text-white rounded-md"
                radius="sm"
                variant="bordered"
              />
              <Input
                type="email"
                placeholder="Sell Fee"
                className="bg-background-foreground text-white rounded-md"
                radius="sm"
                variant="bordered"
              />

              <div className="flex justify-between space-x-4">
                <Button
                  variant="bordered"
                  className="text-white hover:bg-primary-foreground"
                  radius="sm"
                  size="md"
                  fullWidth
                >
                  AI
                </Button>
                <Button
                  className="text-white bg-primary-foreground"
                  radius="sm"
                  size="md"
                  fullWidth
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-6/12 px-8 text-white flex flex-col">
          <div>
            <div className="w-full bg-background-foreground rounded px-4 py-3">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-primary flex justify-center items-center rounded">
                  <Image src={wallet} alt="wallet" />
                </div>
                <div>
                  <h1 className="text-xs">Wallet Address</h1>
                  <h1 className="text-sm font-semibold">
                    2345acv123htd23454acxzczxcx
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 my-3">
              <div className="bg-background-foreground w-4/12 rounded px-4 py-3">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-primary flex justify-center items-center rounded">
                    <Image src={wallet} alt="wallet" />
                  </div>
                  <div>
                    <h1 className="text-xs">SOL Balance</h1>
                    <h1 className="text-sm font-semibold">21.8 SOL</h1>
                  </div>
                </div>
              </div>
              <div className="bg-background-foreground w-8/12 rounded px-4 py-3">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-primary flex justify-center items-center rounded">
                    <Image src={wallet} alt="wallet" />
                  </div>
                  <div>
                    <h1 className="text-xs">SFG Balance</h1>
                    <h1 className="text-sm font-semibold">2,845,100.85 SFG</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 space-y-2">
            <hr />
            <h1>Panel Heading Here</h1>
          </div>
          <div className="flex-1 bg-background-foreground rounded "></div>
        </div>
      </div>
    </SidebarLayout>
  );
}
