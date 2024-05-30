"use client";

import {
  Button,
  Checkbox,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
  cn,
  useDisclosure,
} from "@nextui-org/react";
import nodeSetup from "../../public/Node setup.png";
import i from "../../public/i.png";
import Image from "next/image";
import { useState } from "react";
import wallet from "../../public/wallet.png";
import React, { useEffect, useRef } from "react";
import SidebarLayout from "@/components/Sidebar";

export default function Page() {
  const [isVerified, setIsVerified] = useState(false);
  const [isTradeStarted, setIsTradeStarted] = useState(false);
  const [isFirstSelected, setIsFirstSelected] = useState(false);
  const [isSecondSelected, setIsSecondSelected] = useState(false);
  const [isThirdSelected, setIsThirdSelected] = useState(false);
  const [isForthSelected, setIsForthSelected] = useState(false);
  const [isFifthSelected, setIsFifthSelected] = useState(false);
  const [isSixthSelected, setIsSixthSelected] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const name = "chris";

  let tvScriptLoadingPromise;

  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src =
          "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("technical-analysis-chart-demo") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          container_id: "technical-analysis-chart-demo",
          width: "100%",
          height: "100%",
          autosize: true,
          symbol: "AAPL",
          interval: "D",
          timezone: "exchange",
          theme: "light",
          style: "1",
          withdateranges: true,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          save_image: false,
          studies: [
            "ROC@tv-basicstudies",
            "StochasticRSI@tv-basicstudies",
            "MASimple@tv-basicstudies",
          ],
          show_popup_button: true,
          popup_width: "1000",
          popup_height: "650",
          support_host: "https://www.tradingview.com",
          locale: "en",
        });
      }
    }
  }, []);

  if (isTradeStarted) {
    return (
      <SidebarLayout>
       
        <div className="flex">
          <div className="border w-9/12 h-screen">
            <div className="h-96 w-full">
              <div className="flex space-x-4">
                <div className="w-5/12 bg-background-foreground  rounded px-4 py-3">
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
                <div className="bg-background-foreground w-3/12 rounded px-4 py-3">
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
                <div className="bg-background-foreground w-4/12 rounded px-4 py-3">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 bg-primary flex justify-center items-center rounded">
                      <Image src={wallet} alt="wallet" />
                    </div>
                    <div>
                      <h1 className="text-xs">SFG Balance</h1>
                      <h1 className="text-sm font-semibold">
                        2,845,100.85 SFG
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
 <div
          className="tradingview-widget-container border border-white"
          style={{ height: "80%"}}
        >
          <div
            id="technical-analysis-chart-demo"
            style={{ height: "calc(100% - 32px)", width: "100%" }}
          />
          <div className="tradingview-widget-copyright">
            <a
              href="https://www.tradingview.com/"
              rel="noopener nofollow"
              target="_blank"
            >
              <span className="blue-text">
                Track all markets on TradingView
              </span>
            </a>
          </div>
        </div>
            </div>
            <div className="flex-1 border p-8 rounded bg-background-foreground">

            </div>
          </div>
          <div className="border w-3/12 h-screen">

          </div>
        </div>
      </SidebarLayout>
    );
  }

  if (isVerified) {
    return (
      <SidebarLayout>
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
            <Link
              onPress={onOpen}
              underline="always"
              className="block text-center text-white hover:text-primary cursor-pointer"
              size="sm"
            >
              Advance Options
            </Link>
            <Modal
              size="3xl"
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              isDismissable={true}
              isKeyboardDismissDisabled={false}
              className="bg-background-foreground text-white"
              motionProps={{
                variants: {
                  enter: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  },
                  exit: {
                    y: -20,
                    opacity: 0,
                    transition: {
                      duration: 0.2,
                      ease: "easeIn",
                    },
                  },
                },
              }}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Advance Options
                    </ModalHeader>
                    <ModalBody>
                      <div className="flex space-x-4">
                        <div className="w-6/12 space-y-2">
                          <div
                            className={cn(
                              isThirdSelected
                                ? "border-primary"
                                : "border-muted",
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
                                Rug Check
                              </span>
                              <Checkbox
                                isSelected={isThirdSelected}
                                onValueChange={setIsThirdSelected}
                              ></Checkbox>
                            </div>
                            <div className="items-start space-y-2">
                              <Input
                                placeholder="Rug Check Risk Level"
                                labelPlacement="outside"
                                className="bg-background-foreground rounded-md"
                                variant="bordered"
                                radius="sm"
                                fullWidth
                                isDisabled={!isThirdSelected}
                              />
                              <div className="flex space-x-4">
                                <div className="w-4/12">
                                  <Button
                                    variant="bordered"
                                    className="block m-auto text-white hover:bg-primary-foreground"
                                    fullWidth
                                    radius="sm"
                                    isDisabled={!isThirdSelected}
                                  >
                                    AI
                                  </Button>
                                </div>
                                <div className="w-8/12">
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
                            </div>
                          </div>
                          <div
                            className={cn(
                              isThirdSelected
                                ? "border-primary"
                                : "border-muted",
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
                                Rug Check
                              </span>
                              <Checkbox
                                isSelected={isThirdSelected}
                                onValueChange={setIsThirdSelected}
                              ></Checkbox>
                            </div>
                            <div className="items-start space-y-2">
                              <Input
                                placeholder="Rug Check Risk Level"
                                labelPlacement="outside"
                                className="bg-background-foreground rounded-md"
                                variant="bordered"
                                radius="sm"
                                fullWidth
                                isDisabled={!isThirdSelected}
                              />
                              <div className="flex space-x-4">
                                <div className="w-4/12">
                                  <Button
                                    variant="bordered"
                                    className="block m-auto text-white hover:bg-primary-foreground"
                                    fullWidth
                                    radius="sm"
                                    isDisabled={!isThirdSelected}
                                  >
                                    AI
                                  </Button>
                                </div>
                                <div className="w-8/12">
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
                            </div>
                          </div>
                          <div
                            className={cn(
                              isThirdSelected
                                ? "border-primary"
                                : "border-muted",
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
                                Rug Check
                              </span>
                              <Checkbox
                                isSelected={isThirdSelected}
                                onValueChange={setIsThirdSelected}
                              ></Checkbox>
                            </div>
                            <div className="items-start space-y-2">
                              <Input
                                placeholder="Rug Check Risk Level"
                                labelPlacement="outside"
                                className="bg-background-foreground rounded-md"
                                variant="bordered"
                                radius="sm"
                                fullWidth
                                isDisabled={!isThirdSelected}
                              />
                              <div className="flex space-x-4">
                                <div className="w-4/12">
                                  <Button
                                    variant="bordered"
                                    className="block m-auto text-white hover:bg-primary-foreground"
                                    fullWidth
                                    radius="sm"
                                    isDisabled={!isThirdSelected}
                                  >
                                    AI
                                  </Button>
                                </div>
                                <div className="w-8/12">
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
                            </div>
                          </div>
                        </div>
                        <div className="w-6/12 space-y-2">
                          <div
                            className={cn(
                              isThirdSelected
                                ? "border-primary"
                                : "border-muted",
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
                                Rug Check
                              </span>
                              <Checkbox
                                isSelected={isThirdSelected}
                                onValueChange={setIsThirdSelected}
                              ></Checkbox>
                            </div>
                            <div className="items-start space-y-2">
                              <Input
                                placeholder="Rug Check Risk Level"
                                labelPlacement="outside"
                                className="bg-background-foreground rounded-md"
                                variant="bordered"
                                radius="sm"
                                fullWidth
                                isDisabled={!isThirdSelected}
                              />
                              <div className="flex space-x-4">
                                <div className="w-4/12">
                                  <Button
                                    variant="bordered"
                                    className="block m-auto text-white hover:bg-primary-foreground"
                                    fullWidth
                                    radius="sm"
                                    isDisabled={!isThirdSelected}
                                  >
                                    AI
                                  </Button>
                                </div>
                                <div className="w-8/12">
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
                            </div>
                          </div>
                          <div
                            className={cn(
                              isThirdSelected
                                ? "border-primary"
                                : "border-muted",
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
                                Rug Check
                              </span>
                              <Checkbox
                                isSelected={isThirdSelected}
                                onValueChange={setIsThirdSelected}
                              ></Checkbox>
                            </div>
                            <div className="items-start space-y-2">
                              <Input
                                placeholder="Rug Check Risk Level"
                                labelPlacement="outside"
                                className="bg-background-foreground rounded-md"
                                variant="bordered"
                                radius="sm"
                                fullWidth
                                isDisabled={!isThirdSelected}
                              />
                              <div className="flex space-x-4">
                                <div className="w-4/12">
                                  <Button
                                    variant="bordered"
                                    className="block m-auto text-white hover:bg-primary-foreground"
                                    fullWidth
                                    radius="sm"
                                    isDisabled={!isThirdSelected}
                                  >
                                    AI
                                  </Button>
                                </div>
                                <div className="w-8/12">
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" variant="light" onPress={onClose}>
                        Back to main screen
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
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
                      <h1 className="text-sm font-semibold">
                        2,845,100.85 SFG
                      </h1>
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
      </SidebarLayout>
    );
  }
  return (
    <SidebarLayout>
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
    </SidebarLayout>
  );
}
