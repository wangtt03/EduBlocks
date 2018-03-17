ORANGE='\033[0;33m'
BLUE='\033[0;36m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${ORANGE}Welcome to the EduBlocks Raspberry Pi Edition installer!"
echo -e "${ORANGE}This script will install all the necessary things to setup EduBlocks.\n"

echo -e "${BLUE}Always be careful when running scripts and commands copied
from the internet. Ensure they are from a trusted source. Although, this is an offical script and is safe to run\n"

echo -e "${NC}Let's get started!\n"

if [ $(whoami) == 'root' ]; then
  echo -e "${RED}Please do not run me as root"
  exit 1
fi

# ARCH=$(uname -m)
ARCH="armv6l"

cd ~

if [ -f edublocks-$ARCH.tar.xz ]; then
  echo ''
  echo -e "${BLUE}Removing old download...\n"
  rm -f edublocks-$ARCH.tar.xz
fi

if [ -d edublocks ]; then
  echo ''
  echo -e "${BLUE}Removing old extract...\n"
  rm -rf edublocks
fi

echo ''
echo -e "${BLUE}Downloading package...${NC}\n"
wget http://edublocks.org/downloads/edublocks-$ARCH.tar.xz

echo ''
echo -e "${BLUE}Extracting package...\n"
tar -xf edublocks-$ARCH.tar.xz

echo ''
echo -e "${BLUE}Running install dependencies script...\n"
~/edublocks/install-deps.sh

echo ''
echo -e "${BLUE}Running install script..."
~/edublocks/install.sh

if [ -f edublocks-$ARCH.tar.xz ]; then
  echo ''
  echo -e "${BLUE}Removing temp download...\n"
  rm -f edublocks-$ARCH.tar.xz
fi

if [ -d edublocks ]; then
  echo ''
  echo -e "${BLUE}Removing temp extract...\n"
  rm -rf edublocks
  echo -e "${ORANGE}EduBlocks has installed Successfully. To open EduBlocks, go to Menu > Programming > EduBlocks"
fi
