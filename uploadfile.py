import boto3

client = boto3.client("s3")

response = client.put_object(
    Body='car.jpg',
    Bucket='kelvinayisi',
    Key='objectkeycar.jpg',
    ContentType = "image/jpg"
)

print(response)