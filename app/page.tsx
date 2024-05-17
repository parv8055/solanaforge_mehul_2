import { Button, Input } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex">
    <div className="flex justify-around space-x-4 w-full">
        <div className="w-4/12 p-8 text-white">
          <div className="space-y-4">
            <h3>Hey Chris</h3>
            <h1>Welcome</h1>
          </div>
          <hr className="my-4" />
          <div className="my-4">
            <h1 className="my-4">Node Setup</h1>
            <div className="space-y-4">
              <Input
                type="email"
                label="http(s) Node Link"
                radius="sm"
                size="sm"
                className="bg-foreground text-white rounded-md"
                variant="bordered"
              />
              <Input
                type="email"
                label="Websocket Node Link"
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
                Submit
              </Button>
              <Button
                variant="light"
                className="block m-auto underline text-white"
                radius="sm"
              >
                Change Node
              </Button>
            </div>
          </div>
          <hr className="my-4" />
          <div className="my-4">
            <h1 className="my-4">Priority Fees</h1>
            <div className="space-y-4">
              <Input
                type="email"
                label="Buy Fee"
                radius="sm"
                size="sm"
                className="bg-foreground text-white rounded-md"
                variant="bordered"
              />
              <Input
                type="email"
                label="Sell Fee"
                className="bg-foreground text-white rounded-md"
                variant="bordered"
                radius="sm"
                size="sm"
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
