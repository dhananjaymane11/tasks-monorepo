import { useState } from "react";
import { Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import { validateEmail, validateOtp } from "../../utils";
import { Header, InputWrapper, InputRow } from "./Login.style";

function Login({ screen, onSendOtp, onVerifyOtp }) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleSendOTP = async () => {
    if (validateEmail(email)) {
      setErrorText("");
      await onSendOtp({ email });
    } else {
      setErrorText("Enter valid email id");
    }
  };

  const handleVerifyOTP = async () => {
    if (validateOtp(otp)) {
      setErrorText("");
      await onVerifyOtp({ email, otp });
    } else {
      setErrorText("Enter valid OTP");
    }
  };

  const handleEmailInputChange = (value) => {
    const trimmedValue = value?.trim();
    setEmail(trimmedValue);
    if (!trimmedValue) {
      setErrorText("Enter valid email id");
    } else {
      setErrorText("");
    }
  };

  const handleOtpInputChange = (value) => {
    const trimmedValue = value?.trim();
    setOtp(trimmedValue);
    if (!trimmedValue) {
      setErrorText("Enter valid OTP");
    } else {
      setErrorText("");
    }
  };

  const renderLoginView = () => {
    return (
      <InputWrapper>
        <InputRow>
          <TextInput
            fullWidth
            variant="standard"
            label="Enter Email"
            value={email}
            onChangeText={(text) => handleEmailInputChange(text)}
            error={Boolean(errorText)}
            helperText={errorText}
          />
        </InputRow>
        <Button mode="contained" onPress={handleSendOTP}>
          Send OTP
        </Button>
      </InputWrapper>
    );
  };

  return (
    <SafeAreaView>
      <Text>Login</Text>

      {renderLoginView()}
    </SafeAreaView>
  );
}

export default Login;
