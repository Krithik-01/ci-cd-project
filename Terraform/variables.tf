variable "aws_region" {
  description = "The AWS region to deploy to"
  default     = "us-east-1"
}

variable "ami_id" {
  description = "The AMI ID to use for the EC2 instance"
  default     = "ami-04b4f1a9cf54c11d0"
}

variable "instance_type" {
  description = "The instance type"
  default     = "t2.micro"
}
