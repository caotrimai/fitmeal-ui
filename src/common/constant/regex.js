const phoneReg = /^[(]{0,1}[0-1]{1}[0-9]{2}[)]{0,1}[-\s.]{0,1}[0-9]{3}[-\s.]{0,1}[0-9]{4}$/;
// The following REGEX will validate any of these formats:
// (123)456-7890
// 123-456-7890
// 123.456.7890
// 1234567890


export { phoneReg };