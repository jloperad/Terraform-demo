resource "aws_eip" "lb" {
  instance = aws_instance.ec2_instance.id
  vpc      = true
}