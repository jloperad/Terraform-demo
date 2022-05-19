resource "aws_db_subnet_group" "default" {
  name       = "group1-subnet_group"
  subnet_ids = [var.subnet1_id, var.subnet2_id]

  tags = {
    Name = "group1-subnet_group"
  }
}

resource "aws_db_instance" "postgres" {
  identifier = "group1-rds"
  engine                 = "postgres"
  engine_version         = "14"
  instance_class         = "db.t3.micro"
  allocated_storage      = 30
  # db_name                = "mypostgres" ¿¿¿será necesario???
  username               = "postgres"
  password               = "postgres"
  port                   = 5432
  skip_final_snapshot    = true
  vpc_security_group_ids = [aws_security_group.ec2_public_security_group.id]
  db_subnet_group_name   = aws_db_subnet_group.default.name
}