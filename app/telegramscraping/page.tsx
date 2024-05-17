import { Button, Input } from "@nextui-org/react";

let verified = true
export default function page() {
  if(verified){
    return (
      <main className="flex min-h-screen flex-1">
      <div className="flex justify-around space-x-4 w-full">
        <div className="w-4/12 p-8 text-white">
          <div className="my-4 border border-white rounded p-4">
            <h1 className="my-4">Telegram Integration</h1>
            <div className="space-y-4">
              <Input
                type="email"
                label="Telegram Contact Number"
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
    )
  }
  return (
    <main className="flex min-h-screen flex-1">
      <div className="flex justify-around space-x-4 w-full">
        <div className="w-4/12 p-8 text-white">
          <div className="space-y-4">
            <h3>Hey Chris</h3>
            <h1>Welcome</h1>
          </div>
          <hr className="my-4" />
          <div className="my-4">
            <h1 className="my-4">Telegram Integration</h1>
            <div className="space-y-4">
              <Input
                type="email"
                label="Telegram Contact Number"
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
                GET CODE
              </Button>
            </div>
          </div>
          <hr className="my-4" />
          <div className="my-4">
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
