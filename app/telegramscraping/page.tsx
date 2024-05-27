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
  const [isSixthSelected, setIsSixthSelected] = useState(false);
  const [selected, setSelected] = useState("");

  const name = "chris";
  if (isTradeStarted) {
    return <div></div>;
  }
  if (isVerified) {
    return (
      <div className="flex justify-evenly space-x-4 pt-4">
        <div className="w-4/12 px-8">
          <div
            className={cn(
              isFirstSelected ? "border-primary" : "border-muted",
              "border rounded px-4 py-3 space-y-2 bg-muted-foreground hover:border-primary"
            )}
          >
            <div className="flex justify-between">
              <span
                className={cn(
                  isFirstSelected ? "text-white" : "text-muted",
                  "text-xs"
                )}
              >
                PURCHASE AMOUNT
              </span>
              <Checkbox
                isSelected={isFirstSelected}
                onValueChange={setIsFirstSelected}
              ></Checkbox>
            </div>
            <Input
              placeholder="ENTER AMOUNT HERE"
              labelPlacement="outside"
              className="bg-background-foreground rounded-md"
              variant="bordered"
              radius="sm"
              isDisabled={!isFirstSelected}
            />
            <Button
              variant="bordered"
              className="block m-auto text-white hover:bg-primary-foreground"
              fullWidth
              radius="sm"
              size="md"
              isDisabled={!isFirstSelected}
            >
              CONFIRM
            </Button>
          </div>
          <div
            className={cn(
              isSecondSelected ? "border-primary" : "border-muted",
              "my-4 border rounded px-4 py-3 space-y-2 bg-muted-foreground hover:border-primary"
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
                placeholder="%"
                label="TAKE PROFIT"
                labelPlacement="outside"
                className="bg-background-foreground rounded-md"
                variant="bordered"
                radius="sm"
                isDisabled={!isSecondSelected}
              />
              <Input
                placeholder="%"
                label="STOP LOSS"
                labelPlacement="outside"
                className="bg-background-foreground rounded-md"
                variant="bordered"
                radius="sm"
                isDisabled={!isSecondSelected}
              />
            </div>
            <Button
              variant="bordered"
              className="text-white hover:bg-primary-foreground"
              fullWidth
              radius="sm"
              size="md"
              isDisabled={!isSecondSelected}
            >
              CONFIRM
            </Button>
          </div>
          <div
            className={cn(
              isThirdSelected ? "border-primary" : "border-muted",
              "border rounded px-4 py-3 space-y-2 bg-muted-foreground hover:border-primary"
            )}
          >
            <div className="flex justify-between mb-2">
              <span
                className={cn(
                  isThirdSelected ? "text-white" : "text-muted",
                  "text-xs"
                )}
              >
                STOP LOSS
              </span>
              <Checkbox
                isSelected={isThirdSelected}
                onValueChange={setIsThirdSelected}
              ></Checkbox>
            </div>
            <div className="flex space-x-4 items-start">
              <Input
                placeholder="%"
                labelPlacement="outside"
                className="bg-background-foreground rounded-md"
                variant="bordered"
                radius="sm"
                isDisabled={!isThirdSelected}
              />
              <Button
                variant="bordered"
                className="block m-auto text-white hover:bg-primary-foreground"
                fullWidth
                radius="sm"
                isDisabled={!isThirdSelected}
              >
                CONFIRM
              </Button>
            </div>
          </div>
          <div className="space-y-2 my-2">
            <div
              className={cn(
                isForthSelected ? "border-primary" : "border-muted",
                "flex justify-between items-center rounded-lg py-2 px-4 bg-muted-foreground border hover:border-primary"
              )}
            >
              <span
                className={cn(
                  isForthSelected ? "text-white" : "text-muted",
                  "text-xs"
                )}
              >
                Keep Buying After First Token Found
              </span>
              <Checkbox
                isSelected={isForthSelected}
                onValueChange={setIsForthSelected}
                className=""
              ></Checkbox>
            </div>
            <div
              className={cn(
                isFifthSelected ? "border-primary" : "border-muted",
                "flex justify-between items-center rounded-lg py-2 px-4 bg-muted-foreground border mb-2 hover:border-primary"
              )}
            >
              <span
                className={cn(
                  isFifthSelected ? "text-white" : "text-muted",
                  "text-xs"
                )}
              >
                Buy Purchased Token Again
              </span>
              <Checkbox
                isSelected={isFifthSelected}
                onValueChange={setIsFifthSelected}
                className=""
              ></Checkbox>
            </div>
          </div>
          <div className="my-4 flex space-x-4 items-start">
            <div className="w-8/12">
            <Input
              placeholder="Channel/Group Selection"
              className="bg-background-foreground rounded"
              variant="bordered"
              radius="sm"
              fullWidth
            />
            </div>
         
            <div className="w-4/12">
   
            <Button
              variant="bordered"
              className="block m-auto text-white hover:bg-primary-foreground"
              fullWidth
              radius="sm"
            >
              SUBMIT
            </Button>
            </div>
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
          <div
            className={cn(
              isSixthSelected ? "border-primary" : "border-muted",
              "flex-1 bg-muted-foreground rounded p-12 border relative hover:border-primary"
            )}
          >
            <div className="flex justify-end absolute top-2 right-0">
              <Checkbox
                isSelected={isSixthSelected}
                onValueChange={setIsSixthSelected}
                className=""
              ></Checkbox>
            </div>
            <div className="flex space-x-4">
              <Input
                type="email"
                placeholder="% TOKEN"
                className="bg-background-foreground rounded-md"
                variant="bordered"
                radius="sm"
                isDisabled={!isSixthSelected}
              />
              <Input
                type="email"
                placeholder="% PROFIT"
                className="bg-background-foreground rounded-md"
                variant="bordered"
                radius="sm"
                isDisabled={!isSixthSelected}
              />
            </div>
            <div className="flex space-x-4 my-4">
              <Input
                placeholder="% TOKEN"
                className="bg-background-foreground rounded-md"
                variant="bordered"
                radius="sm"
                isDisabled={!isSixthSelected}
              />
              <Input
                placeholder="% PROFIT"
                className="bg-background-foreground rounded-md"
                variant="bordered"
                radius="sm"
                isDisabled={!isSixthSelected}
              />
            </div>
            <Button
              variant="bordered"
              className="text-white hover:bg-primary-foreground"
              fullWidth
              radius="sm"
              isDisabled={!isSixthSelected}
            >
              CONFIRM
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-evenly space-x-4 pt-12 pb-8 h-full">
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
              className="text-white hover:bg-primary-foreground"
              fullWidth
              radius="sm"
              size="md"
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
            className="text-white hover:bg-primary-foreground"
            fullWidth
            radius="sm"
            size="md"
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
        <div className="flex-1 bg-muted-foreground rounded"></div>
      </div>
    </div>
  );
}
