
# Creating Public Security Group
resource "aws_security_group" "ec2_public_security_group" {
  name        = var.sg_name
  description = var.sg_description
  vpc_id      = var.vpc_id

  ingress {
    from_port   = 8080
    protocol    = "TCP"
    to_port     = 8080
    cidr_blocks = ["0.0.0.0/0"]
    description = "Jenkins"
  }


  ingress {
    from_port   = 22
    protocol    = "TCP"
    to_port     = 22
    cidr_blocks = [var.permited_ip_for_ssh]
    description = "SSH connection"
  }

  ingress {
    from_port   = 4200
    protocol    = "TCP"
    to_port     = 4200
    cidr_blocks = ["0.0.0.0/0"]
    description = "frontend"
  }

  ingress {
    from_port   = 8081
    protocol    = "TCP"
    to_port     = 8081
    cidr_blocks = ["0.0.0.0/0"]
    description = "API"
  }

  egress {
    from_port   = 0
    protocol    = "-1" # open all out rule
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = var.sg_tags
}
