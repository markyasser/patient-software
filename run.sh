# Build Docker Image
docker build -t patient-software

# Run Docker Image
docker run -d -p 5000:5000 --name task-manager patient-software