import React from "react";
import {
  ActionButton,
  // Book,
  Button,
  ButtonGroup,
  Checkbox,
  Content,
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
  Image,
  Link,
  Provider,
  Text,
  TextField,
  View,
} from "@adobe/react-spectrum";

function App() {
  let alertSave = (close) => {
    close();
    alert("Profile saved!");
  };
  let alertCancel = (close) => {
    close();
    alert("Profile not saved!");
  };
  return (
    <Provider theme={defaultTheme}>
      <Grid
        areas={["header  header", "sidebar content", "footer  footer"]}
        columns={["1fr", "3fr"]}
        rows={["size-1000", "auto", "size-1000"]}
        height="size-6000"
        gap="size-10"
      >
        <View backgroundColor="celery-600" gridArea="header">
          Logo Link to Home. <Button variant="cta">Products</Button>{" "}
          <Button variant="primary">Services</Button>{" "}
          <Button variant="secondary">About Us</Button>{" "}
          <Button variant="negative">Contact</Button>{" "}
          <Button variant="overBackground">Careers</Button>
        </View>
        <View backgroundColor="blue-600" gridArea="sidebar">
          Main Menu
          <br />
          Sidebar
          <br />
          gridArea
        </View>
        <View backgroundColor="purple-600" gridArea="content">
          <Button variant="overBackground">Sign In</Button>{" "}
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
                    <a href="//example.com" target="_blank">
                      What is this?
                    </a>
                  </Link>
                </Header>
                <Divider />
                <Content>
                  <Form>
                    <TextField
                      label="First Name"
                      placeholder="John"
                      autoFocus
                    />
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
          <DialogTrigger isDismissable>
            <ActionButton>Status</ActionButton>
            <Dialog>
              <Heading>Your Current Status</Heading>
              <Divider />
              <Divider />
              <Content>Printer Status: Connected</Content>
            </Dialog>
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
        </View>
        <View backgroundColor="magenta-600" gridArea="footer" />
        <Footer gridArea="footer" justifySelf="center">
          &copy; All rights reserved.
        </Footer>
      </Grid>

      {/* <hr />
      <Flex direction="column" width="size-2000" gap="size-100">
        <View backgroundColor="celery-600" height="size-800">
          <Button variant="overBackground">Hola Amigos</Button>
        </View>
        <View backgroundColor="blue-600" height="size-800">
          <Button variant="primary">Bonjour mon amis</Button>
        </View>
        <View backgroundColor="magenta-600" height="size-800">
          <Button variant="secondary">Bonjour mon amis</Button>
        </View>
      </Flex> */}
    </Provider>
  );
}

export default App;
