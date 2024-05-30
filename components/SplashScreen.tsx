"use client";

import Image from "next/image";
import logo from "../public/splashlogo.png";
import { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";

export default function SplashScreen() {
  const [isPressed, setIsPressed] = useState(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className="flex flex-col items-center justify-center bg-splashgradient h-screen w-screen space-y-8">
      <div>
        <Image
          src={logo}
          alt="Logo"
          width={300}
          height={300}
          // className="px-8 py-12"
        />
        <h1 className="text-white mt-4 text-center">Welcome to Trading Bot</h1>
      </div>
      <div className="w-4/12">
      {isPressed ? (
        <div className="flex space-x-4">
          <Input type="email" placeholder="Email"  radius="sm"
                />
          <Button className="bg-cta text-white" radius="sm">
            SUBMIT
          </Button>
        </div>
      ) : (
        <Button
          className="bg-white block mx-auto"
          radius="sm"
          // onClick={() => setIsPressed(true)}
          onPress={onOpen}
        >
          START TRADING
        </Button>
      )}
      </div>
    
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
        className="bg-background-foreground text-white"
        >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
          
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    

      <span className="text-gray-500 text-xs text-center absolute bottom-12">
        This is our beta version, and we're constantly enhancing it with new
        features to provide you with the best trading experience possible. If
        you encounter any issues <br /> or bugs, please don't hesitate to reach
        out to us at BOT@SOLANAFORGE.DEV. Your feedback is invaluable as we work
        to improve and refine our bot
      </span>
    </div>
  );
}
