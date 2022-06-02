#######################################################
# config variables
#######################################################

variable "aws_region" {
  type        = string
  description = "AWS default region (where to deploy your resources)"
}

#######################################################
# EC2 variables
#######################################################

variable "instance_type" {
  type        = string
  description = "EC2 instance type"
}

variable "ec2_tags" {
  description = "EC2 resource tags"
  type        = map(string)
}

variable "ami_id" {
  type        = string
  description = "EC2 AMI ID"
}

variable "subnet1_id" {
  type        = string
  description = "Subnet to deploy your resources"
}

variable "subnet2_id" {
  type        = string
  description = "Subnet to deploy your resources"
}

variable "public_ip" {
  type        = bool
  description = "Do you need public ip (true->yes,false->no)"
}

variable "key_pair_name" {
  type        = string
  description = "Key pair name"
}

variable "user_data" {
  type        = string
  description = "user data path"
}

##############################################
# Security group variables
##############################################

variable "sg_name" {
  type        = string
  description = "Security group name"
}

variable "sg_description" {
  type        = string
  description = "Security group description"
}

variable "vpc_id" {
  type        = string
  description = "VPC ID"
}

variable "sg_tags" {
  description = "SG resource tags"
  type        = map(string)
}

variable "permited_ip_for_ssh" {
  description = "IPs that can connect to your EC2 instance"
  type        = string
}

variable "subnet_group_name" {
  description = "value of the subnet group name"
  type        = string
}

variable "subnet_group_tags" {
  description = "tags of the subnet group "
  type        = map(string)
}

variable "db_identifier" {
  description = "value of the db identifier"
  type        = string
}
  
variable "db_engine" {
  description = "value of the db engine"
  type        = string
}

variable "db_engine_version" {
  description = "value of the db engine version"
  type        = string
}

variable db_instance_class {
  description = "value of the db instance class"
  type        = string
}

variable "db_allocated_storage" {
  description = "value of the db allocated storage"
  type        = number
}
  
variable "db_username" {
  description = "value of the db username"
  type        = string
}

variable "db_password" {
  description = "value of the db password"
  type        = string
}
  
variable "db_port" {
  description = "value of the db port"
  type        = number
}
  
variable "db_skip_final_snapshot" {
  description = "value of the db skip final snapshot"
  type        = bool
}

variable "db_public_access" {
  description = "value of the db public access"
  type        = bool
}

variable "eip_vpc" {
  description = "value of the eip vpc"
  type        = bool
}
  
variable "eip_tags" {
  description = "value of the eip tags"
  type        = map(string)
}
  