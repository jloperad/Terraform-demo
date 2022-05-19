output "public_ip_address" {
  description = "public ip address"
  value       = aws_eip.lb.public_ip
}