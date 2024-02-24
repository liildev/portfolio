import { BaseSyntheticEvent, useState } from "react";
import { useToast } from "~/lib";
import { sendForm } from "@emailjs/browser";
import { FormContent, FormGroup, Label, Input, Textarea, Button } from "./styles";

export const Form = () => {
  const { setToast } = useToast();
  const [text, setText] = useState("Send");

  const sendMessage = async (e: BaseSyntheticEvent<Event, EventTarget & HTMLFormElement>) => {
    e.preventDefault();

    try {
      setText("Sending...");

      await sendForm(
        `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        e.target,
        `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
      );

      setToast("Email sent :D", "Thanks for taking the time to write it.", true, true);
    } catch (e) {
      console.log(e);
      setToast("Error :(", "Something wrong happened. Try again later.", true, false);
    } finally {
      setText("Send");
      // e.target.reset();
    }
  };

  return (
    <FormContent onSubmit={sendMessage}>
      <FormGroup>
        <Label htmlFor="name">Name</Label>

        <Input id="name" name="name" type="text" placeholder="James Bond" required />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">Email</Label>

        <Input id="email" name="email" type="email" placeholder="james@bond.com" required />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="message">Message</Label>

        <Textarea id="message" name="message" placeholder="How can I help you?" rows={4} required />
      </FormGroup>

      <FormGroup>
        <Button type="submit">{text}</Button>
      </FormGroup>
    </FormContent>
  );
};
