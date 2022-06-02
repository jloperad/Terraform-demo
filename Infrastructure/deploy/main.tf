data "http" "myipaddr" {
   url = "http://icanhazip.com"
}

module "deploy_ec2" {
  source        = "../infra"
  aws_region    = "us-east-1"
  instance_type = "t2.medium"
  ec2_tags      = { Name = "group1-ec2" }
  ami_id        = "ami-005de95e8ff495156"
  key_pair_name = "team1"
  user_data     = file("../infra/user_data.sh")

  subnet1_id = "subnet-04e972f3a706c00e8"
  subnet2_id = "subnet-0ee2351fb4338f1c7"
  public_ip = true

  sg_name             = "group1-sg"
  sg_description      = "Allow http over port 8080 and ssh over port 22"
  vpc_id              = "vpc-031420f7c99b1a0bd"
  sg_tags             = { Name = "group1-sg" }
  permited_ip_for_ssh = "${chomp(data.http.myipaddr.body)}/32"

  eip_vpc = true
  eip_tags = { Name = "group1-eip" }

  subnet_group_name = "group1-subnet_group"
  subnet_group_tags = { Name = "group1-subnet_group" }

  db_identifier = "group1-rds"
  db_engine     = "postgres"
  db_engine_version = "14"
  db_instance_class = "db.t3.micro"
  db_allocated_storage = 30
  db_username = "postgres"
  db_password = "postgres"
  db_port = 5432
  db_skip_final_snapshot = true
  db_public_access = true
}