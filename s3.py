import boto3

client = boto3.client('s3', region_name='eu-west-1')

response = client.create_bucket(
    Bucket='kelvinayisi',
    CreateBucketConfiguration={
        'LocationConstraint': 'eu-west-1',
    },
)

print(response)





