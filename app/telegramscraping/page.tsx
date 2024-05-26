"use client";

import {
  Button,
  Checkbox,
  Input,
  Radio,
  RadioGroup,
  Tooltip,
  cn,
} from "@nextui-org/react";
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
  const [selected, setSelected] = useState("");

  const name = "chris";
  const CustomRadio = (props) => {
    const { children, type } = props;
    return (
      <div
        className={cn(
          selected === type ? "border-white" : "border-disabled",
          "border rounded-lg my-2"
        )}
      >
        {children}
      </div>
    );
  };
  if (isTradeStarted) {
    return <div></div>;
  }
  if (isVerified) {
    return (
      <div className="flex justify-around space-x-4 pt-4">
        <div className="w-4/12 px-8 border">
          <div
            className={cn(
              isFirstSelected ? "border-white" : "border-disabled",
              "my-4 border rounded p-4 space-y-4 "
            )}
          >
            <div className="flex justify-end">
              <Checkbox
                isSelected={isFirstSelected}
                onValueChange={setIsFirstSelected}
              ></Checkbox>
              <h1>{isFirstSelected}</h1>
            </div>
            <Input
              type="email"
              placeholder="ENTER AMOUNT HERE"
              label="PURCHASE AMOUNT"
              labelPlacement="outside"
              className="bg-foreground text-white rounded-md"
              variant="bordered"
              radius="sm"
              isDisabled={!isFirstSelected}
            />
            <Button
              variant="bordered"
              className="block m-auto text-white"
              fullWidth
              radius="sm"
              size="lg"
              isDisabled={!isFirstSelected}
            >
              CONFIRM
            </Button>
          </div>
          <div
            className={cn(
              isSecondSelected ? "border-white" : "border-disabled",
              "my-4 border rounded p-4 space-y-4 "
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
                className="bg-foreground text-white rounded-md"
                variant="bordered"
                radius="sm"
                isDisabled={!isSecondSelected}
              />
              <Input
                type="email"
                placeholder="%"
                label="STOP LOSS"
                labelPlacement="outside"
                className="bg-foreground text-white rounded-md"
                variant="bordered"
                radius="sm"
                isDisabled={!isSecondSelected}
              />
            </div>
            <Button
              variant="bordered"
              className="block m-auto text-white"
              fullWidth
              radius="sm"
              size="lg"
              isDisabled={!isSecondSelected}
            >
              CONFIRM
            </Button>
          </div>
          <div
            className={cn(
              isThirdSelected ? "border-white" : "border-disabled",
              "my-4 border rounded p-4"
            )}
          >
            <div className="flex justify-end mb-2">
              <Checkbox
                isSelected={isThirdSelected}
                onValueChange={setIsThirdSelected}
              ></Checkbox>
            </div>
            <div className="flex space-x-4 items-start">
              <Input
                type="email"
                placeholder="%"
                label="STOP LOSS"
                labelPlacement="outside"
                className="bg-foreground text-white rounded-md"
                variant="bordered"
                radius="sm"
                isDisabled={!isThirdSelected}
              />
              <Button
                variant="bordered"
                className="block m-auto text-white"
                fullWidth
                radius="sm"
                isDisabled={!isThirdSelected}
              >
                CONFIRM
              </Button>
            </div>
          </div>
          <div className="">
            <CustomRadio value="free">
              Keep Buying After First Token Found
            </CustomRadio>
            <CustomRadio value="pro">
              Keep Buying After First Token Found
            </CustomRadio>
          </div>
          <div className="my-4 flex space-x-4 items-start">
            <Input
              type="email"
              placeholder="STOP LOSS"
              className="bg-foreground text-white rounded-md"
              variant="bordered"
              radius="sm"
            />
            <Button
              variant="bordered"
              className="block m-auto text-white"
              fullWidth
              radius="sm"
            >
              CONFIRM
            </Button>
          </div>
          <div className="my-4 flex space-x-4 items-start">
            <Button
              variant="bordered"
              className="block m-auto text-white"
              fullWidth
              radius="sm"
            >
              FORCE STOP
            </Button>
            <Button
              variant="bordered"
              className="bg-cta block m-auto text-white"
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
            <div className="w-full bg-foreground rounded px-4 py-3">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-cta flex justify-center items-center rounded">
                  <Image src={wallet} alt="wallet" />
                </div>
                <div>
                  <h1 className="text-xs">Wallet Address</h1>
                  <h1 className="">2345acv123htd23454acxzczxcx</h1>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 my-4">
              <div className="bg-foreground w-4/12 rounded px-4 py-3">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-cta flex justify-center items-center rounded">
                    <Image src={wallet} alt="wallet" />
                  </div>
                  <div>
                    <h1 className="text-xs">SOL Balance</h1>
                    <h1 className="">21.8 SOL</h1>
                  </div>
                </div>
              </div>
              <div className="bg-foreground w-8/12 rounded px-4 py-3">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-cta flex justify-center items-center rounded">
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
          <div className="flex-1 bg-foreground rounded px-12 py-8">
            <div className="flex space-x-4">
              <Input
                type="email"
                placeholder="% TOKEN"
                className="bg-foreground text-white rounded-md"
                variant="bordered"
                radius="sm"
              />
              <Input
                type="email"
                placeholder="% PROFIT"
                className="bg-foreground text-white rounded-md"
                variant="bordered"
                radius="sm"
              />
            </div>
            <div className="flex space-x-4 my-4">
              <Input
                type="email"
                placeholder="% TOKEN"
                className="bg-foreground text-white rounded-md"
                variant="bordered"
                radius="sm"
              />
              <Input
                type="email"
                placeholder="% PROFIT"
                className="bg-foreground text-white rounded-md"
                variant="bordered"
                radius="sm"
              />
            </div>
            <div className="flex space-x-4">
              <Input
                type="email"
                placeholder="% TOKEN"
                className="bg-foreground text-white rounded-md"
                variant="bordered"
                radius="sm"
              />
              <Input
                type="email"
                placeholder="% PROFIT"
                className="bg-foreground text-white rounded-md"
                variant="bordered"
                radius="sm"
              />
            </div>
            <div className="flex space-x-4 my-4">
              <Input
                type="email"
                placeholder="% TOKEN"
                className="bg-foreground text-white rounded-md"
                variant="bordered"
                radius="sm"
              />
              <Input
                type="email"
                placeholder="% PROFIT"
                className="bg-foreground text-white rounded-md"
                variant="bordered"
                radius="sm"
              />
            </div>
            <div className="flex space-x-4">
              <Input
                type="email"
                placeholder="% TOKEN"
                className="bg-foreground text-white rounded-md"
                variant="bordered"
                radius="sm"
              />
              <Input
                type="email"
                placeholder="% PROFIT"
                className="bg-foreground text-white rounded-md"
                variant="bordered"
                radius="sm"
              />
            </div>
            <div className="flex space-x-4 my-4">
              <Input
                type="email"
                placeholder="% TOKEN"
                className="bg-foreground text-white rounded-md"
                variant="bordered"
                radius="sm"
              />
              <Input
                type="email"
                placeholder="% PROFIT"
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
        <div className="my-4 space-y-4">
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
            onClick={() => setIsVerified(true)}
          >
            VERIFY
          </Button>
        </div>
      </div>
      <div className="w-6/12 px-8 text-white flex flex-col">
        <div>
          <div className="w-full bg-foreground rounded px-4 py-3">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 bg-cta flex justify-center items-center rounded">
                <Image src={wallet} alt="wallet" />
              </div>
              <div>
                <h1 className="text-xs">Wallet Address</h1>
                <h1 className="">2345acv123htd23454acxzczxcx</h1>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 my-4">
            <div className="bg-foreground w-4/12 rounded px-4 py-3">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-cta flex justify-center items-center rounded">
                  <Image src={wallet} alt="wallet" />
                </div>
                <div>
                  <h1 className="text-xs">SOL Balance</h1>
                  <h1 className="">21.8 SOL</h1>
                </div>
              </div>
            </div>
            <div className="bg-foreground w-8/12 rounded px-4 py-3">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-cta flex justify-center items-center rounded">
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
        <div className="flex-1 bg-foreground rounded "></div>
      </div>
    </div>
  );
}
