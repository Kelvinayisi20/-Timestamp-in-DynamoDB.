import boto3
from uuid import uuid4

dynamodb = boto3.resource("dynamodb", region_name='eu-west-1' )

table = dynamodb.Table("Frontend")

user = {
   "pk": "admin",
   "sk": str(uuid4()),
   "fullname": "Kelvin",
   "email" : "ayisikelvin09@icloud.com",
   "phone": "0242287201",
   "Role": "manager",
  
}



response = table.put_item(Item= user)

print(response)