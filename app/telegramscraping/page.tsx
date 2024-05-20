import { Button, Input, Tooltip } from "@nextui-org/react";
import nodeSetup from "../../public/Node setup.png";
import i from "../../public/i.png";
import Image from "next/image";

export default function page() {
  let verified = true;
  const name = "chris";
  if (verified) {
    return (
      <main className="flex min-h-screen flex-1">
        <div className="flex justify-around space-x-4 w-full">
          <div className="w-4/12 px-8 pt-10 text-white">
            <div className="my-4 border border-white rounded p-4">
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="ENTER AMOUNT HERE"
                  label='PURCHASE AMOUNT'
                  labelPlacement="outside"
                  className="bg-foreground text-white rounded-md"
                  variant="bordered"
                  radius="sm"
                />
                <Button
                  variant="bordered"
                  className="block m-auto text-white"
                  fullWidth
                  radius="sm"
                  size="lg"
                >
                  GET CODE
                </Button>
              </div>
            </div>
            <div className="my-4 border border-white rounded p-4">
              <div className="space-y-4">
                <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="%"
                  label='TAKE PROFIT'
                  labelPlacement="outside"
                  className="bg-foreground text-white rounded-md"
                  variant="bordered"
                  radius="sm"
                />
                <Input
                  type="email"
                  placeholder="%"
                  label='STOP LOSS'
                  labelPlacement="outside"
                  className="bg-foreground text-white rounded-md"
                  variant="bordered"
                  radius="sm"
                />
                </div>
                <Button
                  variant="bordered"
                  className="block m-auto text-white"
                  fullWidth
                  radius="sm"
                  size="lg"
                >
                  GET CODE
                </Button>
              </div>
            </div>
            <div className="my-4 border border-white rounded p-4">
              <div className="space-y-4">
                <Input
                  type="email"
                  label="Enter Verification Code"
                  className="bg-foreground text-white rounded-md"
                  variant="bordered"
                  radius="sm"
                  size="sm"
                />
                <Button
                  variant="bordered"
                  className="block m-auto text-white"
                  fullWidth
                  radius="sm"
                  size="lg"
                >
                  VERIFY
                </Button>
              </div>
            </div>
          </div>
          <div className="w-8/12 p-8 text-white flex flex-col">
            <div>
              <div className="h-16 w-full bg-foreground rounded"></div>

              <div className="flex justify-between space-x-4 my-4">
                <div className="h-16 w-full bg-foreground rounded "></div>
                <div className="h-16 w-full bg-foreground rounded "></div>
              </div>
            </div>
            <div className="my-4 space-y-2">
              <hr />
              <h1>Panel Heading Here</h1>
            </div>
            <div className="flex-1 bg-foreground rounded "></div>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="flex min-h-screen flex-1">
      <div className="flex justify-around space-x-4 w-full">
        <div className="w-4/12 px-8 pt-10 text-white">
          <div className="space-y-2">
            <h3 className="text-sm">Hey {name},</h3>
            <h1 className="text-2xl font-semibold">Welcome 👋🏻 </h1>
          </div>
          <hr className="my-4" />
          <div className="my-4">
            <div className="my-2 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="h-8 w-8 bg-cta2 flex justify-center items-center rounded">
                  <Image src={nodeSetup} alt="nodeSetup" />
                </div>
                <h1 className="my-4">Telegram Integration</h1>
              </div>
              <Tooltip content="I am a tooltip">
                <Image src={i} alt="?" width={15} />
              </Tooltip>
            </div>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Telegram Contact Number"
                className="bg-foreground text-white rounded-md"
                variant="bordered"
                radius="sm"
              />
              <Button
                variant="bordered"
                className="block m-auto text-white"
                fullWidth
                radius="sm"
                size="lg"
              >
                GET CODE
              </Button>
            </div>
          </div>
          <hr className="my-8" />
          <div className="my-4">
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Enter Verification Code"
                className="bg-foreground text-white rounded-md"
                variant="bordered"
                radius="sm"
              />
              <Button
                variant="bordered"
                className="block m-auto text-white"
                fullWidth
                radius="sm"
                size="lg"
              >
                VERIFY
              </Button>
            </div>
          </div>
        </div>
        <div className="w-8/12 p-8 text-white flex flex-col">
          <div>
            <div className="h-16 w-full bg-foreground rounded"></div>

            <div className="flex justify-between space-x-4 my-4">
              <div className="h-16 w-full bg-foreground rounded "></div>
              <div className="h-16 w-full bg-foreground rounded "></div>
            </div>
          </div>
          <div className="my-4 space-y-2">
            <hr />
            <h1>Panel Heading Here</h1>
          </div>
          <div className="flex-1 bg-foreground rounded "></div>
        </div>
      </div>
    </main>
  );
}
