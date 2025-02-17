provider "aws" {
  region     = var.aws_region
  access_key = ""
  secret_key = ""
}

resource "aws_instance" "react_app" {
  ami            = var.ami_id
  instance_type  = var.instance_type
  security_groups = [aws_security_group.dev-sg.name]
  tags = {
    Name = "ReactAppInstance"
  }

  # User data to install Docker (optional if not already installed)
  user_data = <<-EOF
              #!/bin/bash
              apt update -y
              apt install -y docker.io
              systemctl start docker
              systemctl enable docker
              EOF
}

resource "aws_security_group" "dev-sg" {
  name        = "dev-sg"
  description = "this is the security group"

  ingress {
    from_port   = 22
    to_port     = 22
    cidr_blocks = ["0.0.0.0/0"]
    protocol    = "tcp"
  }

  ingress {
    from_port   = 8000
    to_port     = 8000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

}

output "instance_ip" {
  value = aws_instance.react_app.public_ip
}
