import React, { useState } from "react";
import NotFound from "@spectrum-icons/illustrations/NotFound";
import Upload from "@spectrum-icons/illustrations/Upload";
import Unauthorized from "@spectrum-icons/illustrations/Unauthorized";
import {
  // appSettings,
  ActionButton,
  // Book,
  Button,
  ButtonGroup,
  Checkbox,
  Content,
  darkTheme,
  defaultTheme,
  Dialog,
  DialogTrigger,
  Divider,
  Flex,
  Footer,
  Form,
  Grid,
  Header,
  Heading,
  IllustratedMessage,
  Image,
  Item,
  Link,
  Picker,
  Provider,
  Radio,
  RadioGroup,
  Text,
  TextField,
  View,
} from "@adobe/react-spectrum";

function App() {
  const [email, setEmail] = useState("");

  let alertSave = (close) => {
    close();
    alert("Profile saved!");
  };

  let alertCancel = (close) => {
    close();
    alert("Profile not saved!");
  };

  return (
    <Provider
      theme={defaultTheme}
      colorScheme="light"
      // locale={appSettings.locale}
    >
      <Grid
        areas={["header  header", "sidebar content", "footer  footer"]}
        columns={["1fr", "3fr"]}
        rows={["size-700", "auto", "size-2200"]}
        height="size-8000"
        gap="size-100"
      >
        <View gridArea="header">
          AshbyLogo.png <Button variant="cta">Home</Button>{" "}
          <Button variant="cta">About Us</Button>{" "}
          <Button variant="cta">Services</Button>{" "}
          <Button variant="cta">Contact Us</Button>
        </View>
        <View gridArea="sidebar">
          <Flex direction="column" gap="size-300" alignItems="start">
            <Provider isQuiet>
              <TextField
                label="Email"
                placeholder="hello@example.com"
                value={email}
                onChange={setEmail}
              />
              <Picker label="Favorite Pet">
                <Item key="bird">Bird</Item>
                <Item key="cat">Cat</Item>
                <Item key="dog">Dog</Item>
                <Item key="fish">Fish</Item>
              </Picker>
            </Provider>
            <Button variant="primary">Submit</Button>
          </Flex>
        </View>
        <View gridArea="content">
          <Button variant="overBackground">Sign In</Button>
          <br />
          {/* <Button variant="cta">Sign Up</Button>{" "} */}
          <DialogTrigger>
            <ActionButton>Register</ActionButton>
            {(close) => (
              <Dialog>
                <Heading>
                  <Flex alignItems="center" gap="size-100">
                    {/* <Book size="S" /> */}
                    <Text>Register for newsletter</Text>
                  </Flex>
                </Heading>
                <Header>
                  <Link>
                    <a
                      href="//example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      What is this?
                    </a>
                  </Link>
                </Header>
                <Divider />
                <Content>
                  <Form>
                    <TextField label="First Name" placeholder="Joe" autoFocus />
                    <TextField label="Last Name" placeholder="Smith" />
                    <TextField
                      label="Street Address"
                      placeholder="123 Any Street"
                    />
                    <TextField label="City" placeholder="San Francisco" />
                  </Form>
                </Content>
                <Footer>
                  <Checkbox>
                    I would like to receive updates for exclusive offers in my
                    area.
                  </Checkbox>
                </Footer>
                <ButtonGroup>
                  <Button variant="secondary" onPress={close}>
                    Cancel
                  </Button>
                  <Button variant="cta" onPress={close}>
                    Register
                  </Button>
                </ButtonGroup>
              </Dialog>
            )}
          </DialogTrigger>
          <DialogTrigger>
            <ActionButton>Upload</ActionButton>
            {(close) => (
              <Dialog>
                <Image
                  slot="hero"
                  alt=""
                  src="https://i.imgur.com/Z7AzH2c.png"
                  objectFit="cover"
                />
                <Heading>Upload file</Heading>
                <Divider />
                <Content>Are you sure you want to upload this file?</Content>
                <ButtonGroup>
                  <Button variant="secondary" onPress={close}>
                    Cancel
                  </Button>
                  <Button variant="cta" onPress={close} autoFocus>
                    Confirm
                  </Button>
                </ButtonGroup>
              </Dialog>
            )}
          </DialogTrigger>
          <DialogTrigger>
            <ActionButton>Set Profile</ActionButton>
            {(close) => (
              <Dialog>
                <Heading>Profile</Heading>
                <Divider />
                <ButtonGroup>
                  <Button
                    variant="secondary"
                    onPress={() => alertCancel(close)}
                  >
                    Cancel
                  </Button>
                  <Button
                    autoFocus
                    variant="cta"
                    onPress={() => alertSave(close)}
                  >
                    Save
                  </Button>
                </ButtonGroup>
                <Content>
                  <Form>
                    <TextField label="Name" />
                    <Checkbox>Make message private</Checkbox>
                  </Form>
                </Content>
              </Dialog>
            )}
          </DialogTrigger>
          <DialogTrigger>
            <ActionButton>Publish</ActionButton>
            {(close) => (
              <Dialog>
                <Heading>Publish 3 pages</Heading>
                <Divider />
                <Content>Confirm publish?</Content>
                <ButtonGroup>
                  <Button variant="secondary" onPress={close}>
                    Cancel
                  </Button>
                  <Button variant="cta" onPress={close} autoFocus>
                    Confirm
                  </Button>
                  <Button variant="primary" onPress={() => alert("Howzit?")}>
                    Aloha
                  </Button>
                </ButtonGroup>
              </Dialog>
            )}
          </DialogTrigger>
          <DialogTrigger isDismissable>
            <ActionButton>Create Blog Post</ActionButton>
            {(close) => (
              <Dialog>
                <Heading>Publish 9 pages to Blog?</Heading>
                <Divider />
                <Content>Confirm publish?</Content>
              </Dialog>
            )}
          </DialogTrigger>
          <DialogTrigger isDismissable>
            <ActionButton>Status</ActionButton>
            <Dialog>
              <Heading>Status</Heading>
              <Divider />
              <Content>Printer Status: Connected</Content>
            </Dialog>
          </DialogTrigger>
          <hr />
          <Form>
            <TextField label="First Name" placeholder="Jonny" autoFocus />
            <TextField label="Last Name" placeholder="Smith" />
            <TextField label="Street Address" placeholder="123 Any Street" />
            <TextField label="City" placeholder="San Francisco" />
            <Button
              variant="cta"
              onPress={() => alert("You registered successfully.")}
            >
              Register
            </Button>
          </Form>
        </View>
        <View backgroundColor="orange-400" gridArea="footer" />
        <Footer gridArea="footer" justifySelf="center">
          <b>&copy; All rights reserved.</b>
          <IllustratedMessage>
            When an IllustratedMessage has a svg and a Heading, the svg needs an
            aria-hidden prop and a role prop set to presentation.
            <Upload role="presentation" aria-label="Upload file icon" />
            <Heading>Drag and Drop your file</Heading>
            <Content>
              Select a File from your computer
              <br /> or Search Adobe Stock
            </Content>
          </IllustratedMessage>
        </Footer>
      </Grid>
    </Provider>
  );
}

export default App;
