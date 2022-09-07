#!/bin/sh
/scratch/qemu/build/qemu-system-riscv64 \
	-kernel /scratch/linux/arch/riscv/boot/Image \
	-nographic \
	-machine virt,aia=aplic-imsic,aia-guests=4 \
	-cpu rv64 \
	-m 4G  \
	-smp 2 \
	-append "root=/dev/vda ro console=hvc0 earlycon=sbi"                        \
	-drive file=/scratch/buildroot/output/images/rootfs.ext2,format=raw,id=hd0                 \
	-device virtio-blk-device,drive=hd0                 \
	-virtfs local,path=./,mount_tag=host,security_model=none \
	-netdev user,id=network0,hostfwd=tcp::1234-:1234 \
	-device e1000,netdev=network0,mac=52:54:00:54:46:69
