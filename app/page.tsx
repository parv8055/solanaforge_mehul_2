import { Button, Input, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import nodeSetup from "../public/nodeSetup.png";
import i from "../public/i.png";
export default function Home() {
  const name = "Chris";
  return (
    <div className="flex justify-around space-x-4 pt-12">
      <div className="w-4/12 px-8 text-white">
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
              className="bg-foreground text-white rounded-md"
              variant="bordered"
            />
            <Input
              type="email"
              placeholder="Websocket Node Link"
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
              Submit
            </Button>
          </div>
          <Button
            variant="light"
            className="block m-auto underline text-white text-sm"
            radius="sm"
          >
            Change Node
          </Button>
        </div>
        <hr className="my-4" />
        <div className="my-4">
          <div className="my-2 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 bg-cta2 flex justify-center items-center rounded">
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
              className="bg-foreground text-white rounded-md"
              radius="sm"
              variant="bordered"
            />
            <Input
              type="email"
              placeholder="Sell Fee"
              className="bg-foreground text-white rounded-md"
              radius="sm"
              variant="bordered"
            />

            <div className="flex justify-between space-x-4">
              <Button
                variant="bordered"
                className="text-white"
                radius="sm"
                size="lg"
                fullWidth
              >
                AI
              </Button>
              <Button
                className="text-white bg-cta2"
                radius="sm"
                size="lg"
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
  );
}
