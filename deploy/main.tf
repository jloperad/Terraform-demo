data "http" "myipaddr" {
   url = "http://icanhazip.com"
}

module "deploy_ec2" {
  source        = "../infra"
  aws_region    = "us-east-1"
  instance_type = "t2.small"
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
}