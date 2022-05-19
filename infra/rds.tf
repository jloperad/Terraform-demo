resource "aws_db_instance" "default" {
  allocated_storage    = 30
  engine               = "postgres"
  engine_version       = "5.7"
  instance_class       = "db.t3.micro"
  name                 = "group1-rds"
  username             = "postgres"
  password             = "secret"
  port = 5432
  skip_final_snapshot  = true
}