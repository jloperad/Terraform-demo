resource "aws_db_subnet_group" "default" {
  name       = var.subnet_group_name
  subnet_ids = [var.subnet1_id, var.subnet2_id]

  tags = var.subnet_group_tags
}

resource "aws_db_instance" "postgres" {
  identifier             = var.db_identifier
  engine                 = var.db_engine
  engine_version         = var.db_engine_version
  instance_class         = var.db_instance_class
  allocated_storage      = var.db_allocated_storage
  username               = var.db_username
  password               = var.db_password
  port                   = var.db_port
  skip_final_snapshot    = var.db_skip_final_snapshot
  vpc_security_group_ids = [aws_security_group.ec2_public_security_group.id]
  db_subnet_group_name   = aws_db_subnet_group.default.name
  publicly_accessible    = var.db_public_access
}