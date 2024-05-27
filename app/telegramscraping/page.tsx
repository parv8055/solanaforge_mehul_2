"use client";

import { Button, Checkbox, Input, Tooltip, cn } from "@nextui-org/react";
import nodeSetup from "../../public/Node setup.png";
import i from "../../public/i.png";
import Image from "next/image";
import { useState } from "react";
import wallet from "../../public/wallet.png";

export default function Page() {
  const [isVerified, setIsVerified] = useState(false);
  const [isTradeStarted, setIsTradeStarted] = useState(false);
  const [isFirstSelected, setIsFirstSelected] = useState(false);
  const [isSecondSelected, setIsSecondSelected] = useState(false);
  const [isThirdSelected, setIsThirdSelected] = useState(false);
  const [isForthSelected, setIsForthSelected] = useState(false);
  const [isFifthSelected, setIsFifthSelected] = useState(false);
  const [selected, setSelected] = useState("");

  const name = "chris";
  if (isTradeStarted) {
    return <div></div>;
  }
  if (isVerified) {
    return (
      <div className="flex justify-around space-x-4 pt-4">
        <div className="w-4/12 px-8">
          <div
            className={cn(
              isFirstSelected ? "border-primary" : "border-muted",
              "my-4 border rounded px-4 py-3 space-y-2 bg-background-foregroundLight"
            )}
          >
            <div className="flex justify-between">
              <h1>PURCHASE AMOUNT</h1>
              <Checkbox
                isSelected={isFirstSelected}
                onValueChange={setIsFirstSelected}
              ></Checkbox>
            </div>
            <Input
              type="email"
              placeholder="ENTER AMOUNT HERE"
              labelPlacement="outside"
              className="bg-background-foreground rounded-md"
              variant="bordered"
              radius="sm"
              ismuted={!isFirstSelected}
            />
            <Button
              variant="bordered"
              className="block m-auto text-white hover:bg-primary-foreground"
              fullWidth
              radius="sm"
              size="md"
              ismuted={!isFirstSelected}
            >
              CONFIRM
            </Button>
          </div>
          <div
            className={cn(
              isSecondSelected ? "border-primary" : "border-muted",
              "my-4 border rounded px-4 py-3 space-y-2 bg-background-foregroundLight"
            )}
          >
            <div className="flex justify-end">
              <Checkbox
                isSelected={isSecondSelected}
                onValueChange={setIsSecondSelected}
              ></Checkbox>
            </div>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="%"
                label="TAKE PROFIT"
                labelPlacement="outside"
                className="bg-background-foreground rounded-md"
                variant="bordered"
                radius="sm"
                ismuted={!isSecondSelected}
              />
              <Input
                type="email"
                placeholder="%"
                label="STOP LOSS"
                labelPlacement="outside"
                className="bg-background-foreground rounded-md"
                variant="bordered"
                radius="sm"
                ismuted={!isSecondSelected}
              />
            </div>
            <Button
              variant="bordered"
              className="text-white hover:bg-primary-foreground"
              fullWidth
              radius="sm"
              size="md"
              ismuted={!isSecondSelected}
            >
              CONFIRM
            </Button>
          </div>
          <div
            className={cn(
              isThirdSelected ? "border-primary" : "border-muted",
              "my-4 border rounded px-4 py-3 bg-background-foregroundLight"
            )}
          >
            <div className="flex justify-between mb-2">
              <h1>STOP LOSS</h1>
              <Checkbox
                isSelected={isThirdSelected}
                onValueChange={setIsThirdSelected}
              ></Checkbox>
            </div>
            <div className="flex space-x-4 items-start">
              <Input
                type="email"
                placeholder="%"
                labelPlacement="outside"
                className="bg-background-foreground rounded-md"
                variant="bordered"
                radius="sm"
                ismuted={!isThirdSelected}
              />
              <Button
                variant="bordered"
                className="block m-auto text-white hover:bg-primary-foreground"
                fullWidth
                radius="sm"
                ismuted={!isThirdSelected}
              >
                CONFIRM
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <div
              className={cn(
                isForthSelected ? "border-primary" : "border-muted",
                "flex justify-between items-center rounded-lg py-2 px-4 bg-background-foregroundLight border"
              )}
            >
              <h1>Helooo</h1>
              <Checkbox
                isSelected={isForthSelected}
                onValueChange={setIsForthSelected}
                className=""
              ></Checkbox>
            </div>
            <div
              className={cn(
                isFifthSelected ? "border-primary" : "border-muted",
                "flex justify-between items-center rounded-lg py-2 px-4 bg-background-foregroundLight border mb-2"
              )}
            >
              <h1>Helooo</h1>
              <Checkbox
                isSelected={isFifthSelected}
                onValueChange={setIsFifthSelected}
                className=""
              ></Checkbox>
            </div>
          </div>
          <div className="my-4 flex space-x-4 items-start">
            <Input
              type="email"
              placeholder="STOP LOSS"
              className="bg-background-foreground rounded-md"
              variant="bordered"
              radius="sm"
            />
            <Button
              variant="bordered"
              className="block m-auto text-white hover:bg-primary-foreground"
              fullWidth
              radius="sm"
            >
              CONFIRM
            </Button>
          </div>
          <div className="my-4 flex space-x-4 items-start">
            <Button
              variant="bordered"
              className="block m-auto text-white hover:bg-primary-foreground"
              fullWidth
              radius="sm"
            >
              FORCE STOP
            </Button>
            <Button
              variant="bordered"
              className="bg-primary block m-auto text-white"
              fullWidth
              radius="sm"
              onClick={() => setIsTradeStarted(true)}
            >
              START TRADE
            </Button>
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
                  <h1 className="">2345acv123htd23454acxzczxcx</h1>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 my-4">
              <div className="bg-background-foreground w-4/12 rounded px-4 py-3">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-primary flex justify-center items-center rounded">
                    <Image src={wallet} alt="wallet" />
                  </div>
                  <div>
                    <h1 className="text-xs">SOL Balance</h1>
                    <h1 className="">21.8 SOL</h1>
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
                    <h1 className="">2,845,100.85 SFG</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 space-y-2">
            <hr />
            <h1>Panel Heading Here</h1>
          </div>
          <div className="flex-1 bg-background-foreground rounded px-12 py-8">
            <div className="flex space-x-4">
              <Input
                type="email"
                placeholder="% TOKEN"
                className="bg-background-foreground rounded-md"
                variant="bordered"
                radius="sm"
              />
              <Input
                type="email"
                placeholder="% PROFIT"
                className="bg-background-foreground rounded-md"
                variant="bordered"
                radius="sm"
              />
            </div>
            <div className="flex space-x-4 my-4">
              <Input
                type="email"
                placeholder="% TOKEN"
                className="bg-background-foreground rounded-md"
                variant="bordered"
                radius="sm"
              />
              <Input
                type="email"
                placeholder="% PROFIT"
                className="bg-background-foreground rounded-md"
                variant="bordered"
                radius="sm"
              />
            </div>
            <div className="flex space-x-4">
              <Input
                type="email"
                placeholder="% TOKEN"
                className="bg-background-foreground rounded-md"
                variant="bordered"
                radius="sm"
              />
              <Input
                type="email"
                placeholder="% PROFIT"
                className="bg-background-foreground rounded-md"
                variant="bordered"
                radius="sm"
              />
            </div>
            <div className="flex space-x-4 my-4">
              <Input
                type="email"
                placeholder="% TOKEN"
                className="bg-background-foreground rounded-md"
                variant="bordered"
                radius="sm"
              />
              <Input
                type="email"
                placeholder="% PROFIT"
                className="bg-background-foreground rounded-md"
                variant="bordered"
                radius="sm"
              />
            </div>
            <div className="flex space-x-4">
              <Input
                type="email"
                placeholder="% TOKEN"
                className="bg-background-foreground rounded-md"
                variant="bordered"
                radius="sm"
              />
              <Input
                type="email"
                placeholder="% PROFIT"
                className="bg-background-foreground rounded-md"
                variant="bordered"
                radius="sm"
              />
            </div>
            <div className="flex space-x-4 my-4">
              <Input
                type="email"
                placeholder="% TOKEN"
                className="bg-background-foreground rounded-md"
                variant="bordered"
                radius="sm"
              />
              <Input
                type="email"
                placeholder="% PROFIT"
                className="bg-background-foreground rounded-md"
                variant="bordered"
                radius="sm"
              />
            </div>
            <Button
              variant="bordered"
              className="block m-auto text-white"
              fullWidth
              radius="sm"
            >
              CONFIRM
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-around space-x-4 pt-12 pb-8 h-full">
      <div className="w-4/12 px-8 text-white">
        <div className="space-y-2">
          <h3 className="text-sm">Hey {name},</h3>
          <h1 className="text-2xl font-semibold">Welcome 👋🏻 </h1>
        </div>
        <hr className="my-4" />
        <div className="my-4">
          <div className="my-2 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 bg-primary2 flex justify-center items-center rounded">
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
              className="bg-background-foreground text-white rounded-md"
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
        <div className="my-4 space-y-4">
          <Input
            type="email"
            placeholder="Enter Verification Code"
            className="bg-background-foreground text-white rounded-md"
            variant="bordered"
            radius="sm"
          />
          <Button
            variant="bordered"
            className="block m-auto text-white"
            fullWidth
            radius="sm"
            size="lg"
            onClick={() => setIsVerified(true)}
          >
            VERIFY
          </Button>
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
                <h1 className="">2345acv123htd23454acxzczxcx</h1>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 my-4">
            <div className="bg-background-foreground w-4/12 rounded px-4 py-3">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-primary flex justify-center items-center rounded">
                  <Image src={wallet} alt="wallet" />
                </div>
                <div>
                  <h1 className="text-xs">SOL Balance</h1>
                  <h1 className="">21.8 SOL</h1>
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
                  <h1 className="">2,845,100.85 SFG</h1>
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
  );
}
