var N = null;var sourcesIndex = {};
sourcesIndex["acpi_tables"] = {"name":"","files":["aml.rs","facs.rs","lib.rs","rsdp.rs","sdt.rs"]};
sourcesIndex["anyhow"] = {"name":"","files":["backtrace.rs","chain.rs","context.rs","ensure.rs","error.rs","fmt.rs","kind.rs","lib.rs","macros.rs","ptr.rs","wrapper.rs"]};
sourcesIndex["arch"] = {"name":"","files":["android.rs","fdt.rs","lib.rs","pstore.rs","serial.rs"]};
sourcesIndex["argh"] = {"name":"","files":["lib.rs"]};
sourcesIndex["argh_derive"] = {"name":"","files":["errors.rs","help.rs","lib.rs","parse_attrs.rs"]};
sourcesIndex["argh_shared"] = {"name":"","files":["lib.rs"]};
sourcesIndex["assertions"] = {"name":"","files":["lib.rs","mechanism.rs"]};
sourcesIndex["async_task"] = {"name":"","files":["header.rs","lib.rs","raw.rs","runnable.rs","state.rs","task.rs","utils.rs"]};
sourcesIndex["async_trait"] = {"name":"","files":["args.rs","expand.rs","lib.rs","lifetime.rs","parse.rs","receiver.rs"]};
sourcesIndex["audio_streams"] = {"name":"","files":["audio_streams.rs","capture.rs","shm_streams.rs"]};
sourcesIndex["base"] = {"name":"","files":["async_types.rs","event.rs","ioctl.rs","lib.rs","mmap.rs","shm.rs","timer.rs","tube.rs","wait_context.rs"]};
sourcesIndex["bit_field"] = {"name":"","files":["lib.rs"]};
sourcesIndex["bit_field_derive"] = {"name":"","files":["bit_field_derive.rs"]};
sourcesIndex["bitflags"] = {"name":"","files":["lib.rs"]};
sourcesIndex["cfg_if"] = {"name":"","files":["lib.rs"]};
sourcesIndex["crc32fast"] = {"name":"","dirs":[{"name":"specialized","files":["mod.rs","pclmulqdq.rs"]}],"files":["baseline.rs","combine.rs","lib.rs","table.rs"]};
sourcesIndex["cros_async"] = {"name":"","dirs":[{"name":"blocking","files":["block_on.rs","pool.rs"]},{"name":"sync","files":["cv.rs","mu.rs","spin.rs","waiter.rs"]}],"files":["blocking.rs","complete.rs","event.rs","executor.rs","fd_executor.rs","io_ext.rs","lib.rs","mem.rs","poll_source.rs","queue.rs","select.rs","sync.rs","timer.rs","uring_executor.rs","uring_source.rs","waker.rs"]};
sourcesIndex["crosvm"] = {"name":"","dirs":[{"name":"plugin","files":["mod.rs","process.rs","vcpu.rs"]}],"files":["argument.rs","crosvm.rs","gdb.rs","linux.rs"]};
sourcesIndex["crosvm_direct"] = {"name":"","files":["main.rs","panic_hook.rs"]};
sourcesIndex["crosvm_plugin"] = {"name":"","files":["lib.rs"]};
sourcesIndex["data_model"] = {"name":"","files":["endian.rs","flexible_array.rs","lib.rs","sys.rs","volatile_memory.rs"]};
sourcesIndex["devices"] = {"name":"","dirs":[{"name":"irqchip","dirs":[{"name":"kvm","files":["mod.rs","x86_64.rs"]}],"files":["ioapic.rs","mod.rs","pic.rs","x86_64.rs"]},{"name":"pci","files":["ac97.rs","ac97_bus_master.rs","ac97_mixer.rs","ac97_regs.rs","mod.rs","msix.rs","pci_configuration.rs","pci_device.rs","pci_root.rs","pcie.rs","stub.rs","vfio_pci.rs"]},{"name":"platform","files":["mod.rs","vfio_platform.rs"]},{"name":"register_space","files":["mod.rs","register.rs","register_space.rs"]},{"name":"usb","dirs":[{"name":"host_backend","files":["error.rs","host_backend_device_provider.rs","host_device.rs","mod.rs","usb_endpoint.rs","utils.rs"]},{"name":"xhci","files":["command_ring_controller.rs","device_slot.rs","event_ring.rs","interrupter.rs","intr_resample_handler.rs","mod.rs","ring_buffer.rs","ring_buffer_controller.rs","ring_buffer_stop_cb.rs","scatter_gather_buffer.rs","transfer_ring_controller.rs","usb_hub.rs","xhci.rs","xhci_abi.rs","xhci_backend_device.rs","xhci_backend_device_provider.rs","xhci_controller.rs","xhci_regs.rs","xhci_transfer.rs"]}],"files":["log.rs","mod.rs"]},{"name":"utils","files":["async_job_queue.rs","error.rs","event_loop.rs","mod.rs"]},{"name":"virtio","dirs":[{"name":"block","files":["asynchronous.rs","block.rs","common.rs","mod.rs"]},{"name":"fs","files":["caps.rs","mod.rs","multikey.rs","passthrough.rs","read_dir.rs","worker.rs"]},{"name":"gpu","files":["mod.rs","protocol.rs","udmabuf.rs","udmabuf_bindings.rs","virtio_gpu.rs"]},{"name":"input","files":["constants.rs","defaults.rs","evdev.rs","event_source.rs","mod.rs"]},{"name":"snd","dirs":[{"name":"vios_backend","files":["mod.rs","shm_streams.rs","shm_vios.rs","streams.rs","worker.rs"]}],"files":["common.rs","constants.rs","layout.rs","mod.rs"]},{"name":"vhost","dirs":[{"name":"user","dirs":[{"name":"device","files":["block.rs","console.rs","fs.rs","gpu.rs","handler.rs","mod.rs","net.rs","vsock.rs","wl.rs"]},{"name":"vmm","files":["block.rs","console.rs","fs.rs","gpu.rs","handler.rs","mac80211_hwsim.rs","mod.rs","net.rs","snd.rs","vsock.rs","wl.rs","worker.rs"]}],"files":["mod.rs","proxy.rs"]}],"files":["control_socket.rs","mod.rs","net.rs","vsock.rs","worker.rs"]}],"files":["async_utils.rs","balloon.rs","console.rs","descriptor_utils.rs","interrupt.rs","iommu.rs","mod.rs","net.rs","p9.rs","pmem.rs","queue.rs","resource_bridge.rs","rng.rs","tpm.rs","virtio_device.rs","virtio_pci_common_config.rs","virtio_pci_device.rs","wl.rs"]}],"files":["acpi.rs","bat.rs","bus.rs","cmos.rs","direct_io.rs","direct_irq.rs","i8042.rs","lib.rs","pit.rs","pl030.rs","proxy.rs","serial.rs","serial_device.rs","vfio.rs"]};
sourcesIndex["disk"] = {"name":"","dirs":[{"name":"qcow","files":["mod.rs","qcow_raw_file.rs","refcount.rs","vec_cache.rs"]}],"files":["android_sparse.rs","composite.rs","disk.rs","gpt.rs"]};
sourcesIndex["downcast_rs"] = {"name":"","files":["lib.rs"]};
sourcesIndex["enumn"] = {"name":"","files":["lib.rs"]};
sourcesIndex["fastrand"] = {"name":"","files":["lib.rs"]};
sourcesIndex["fuse"] = {"name":"","files":["filesystem.rs","lib.rs","mount.rs","server.rs","sys.rs","worker.rs"]};
sourcesIndex["futures"] = {"name":"","files":["lib.rs"]};
sourcesIndex["futures_channel"] = {"name":"","dirs":[{"name":"mpsc","files":["mod.rs","queue.rs","sink_impl.rs"]}],"files":["lib.rs","lock.rs","oneshot.rs"]};
sourcesIndex["futures_core"] = {"name":"","dirs":[{"name":"task","dirs":[{"name":"__internal","files":["atomic_waker.rs","mod.rs"]}],"files":["mod.rs","poll.rs"]}],"files":["future.rs","lib.rs","stream.rs"]};
sourcesIndex["futures_io"] = {"name":"","files":["lib.rs"]};
sourcesIndex["futures_macro"] = {"name":"","files":["executor.rs","join.rs","lib.rs","select.rs","stream_select.rs"]};
sourcesIndex["futures_sink"] = {"name":"","files":["lib.rs"]};
sourcesIndex["futures_task"] = {"name":"","files":["arc_wake.rs","future_obj.rs","lib.rs","noop_waker.rs","spawn.rs","waker.rs","waker_ref.rs"]};
sourcesIndex["futures_util"] = {"name":"","dirs":[{"name":"async_await","files":["join_mod.rs","mod.rs","pending.rs","poll.rs","random.rs","select_mod.rs","stream_select_mod.rs"]},{"name":"future","dirs":[{"name":"future","files":["catch_unwind.rs","flatten.rs","fuse.rs","map.rs","mod.rs","remote_handle.rs","shared.rs"]},{"name":"try_future","files":["into_future.rs","mod.rs","try_flatten.rs","try_flatten_err.rs"]}],"files":["abortable.rs","either.rs","join.rs","join_all.rs","lazy.rs","maybe_done.rs","mod.rs","option.rs","pending.rs","poll_fn.rs","poll_immediate.rs","ready.rs","select.rs","select_all.rs","select_ok.rs","try_join.rs","try_join_all.rs","try_maybe_done.rs","try_select.rs"]},{"name":"io","files":["allow_std.rs","buf_reader.rs","buf_writer.rs","chain.rs","close.rs","copy.rs","copy_buf.rs","cursor.rs","empty.rs","fill_buf.rs","flush.rs","into_sink.rs","line_writer.rs","lines.rs","mod.rs","read.rs","read_exact.rs","read_line.rs","read_to_end.rs","read_to_string.rs","read_until.rs","read_vectored.rs","repeat.rs","seek.rs","sink.rs","split.rs","take.rs","window.rs","write.rs","write_all.rs","write_vectored.rs"]},{"name":"lock","files":["bilock.rs","mod.rs","mutex.rs"]},{"name":"sink","files":["buffer.rs","close.rs","drain.rs","err_into.rs","fanout.rs","feed.rs","flush.rs","map_err.rs","mod.rs","send.rs","send_all.rs","unfold.rs","with.rs","with_flat_map.rs"]},{"name":"stream","dirs":[{"name":"futures_unordered","files":["abort.rs","iter.rs","mod.rs","ready_to_run_queue.rs","task.rs"]},{"name":"stream","files":["all.rs","any.rs","buffer_unordered.rs","buffered.rs","catch_unwind.rs","chain.rs","chunks.rs","collect.rs","concat.rs","count.rs","cycle.rs","enumerate.rs","filter.rs","filter_map.rs","flatten.rs","fold.rs","for_each.rs","for_each_concurrent.rs","forward.rs","fuse.rs","into_future.rs","map.rs","mod.rs","next.rs","peek.rs","ready_chunks.rs","scan.rs","select_next_some.rs","skip.rs","skip_while.rs","split.rs","take.rs","take_until.rs","take_while.rs","then.rs","unzip.rs","zip.rs"]},{"name":"try_stream","files":["and_then.rs","into_async_read.rs","into_stream.rs","mod.rs","or_else.rs","try_buffer_unordered.rs","try_buffered.rs","try_chunks.rs","try_collect.rs","try_concat.rs","try_filter.rs","try_filter_map.rs","try_flatten.rs","try_fold.rs","try_for_each.rs","try_for_each_concurrent.rs","try_next.rs","try_skip_while.rs","try_take_while.rs","try_unfold.rs"]}],"files":["abortable.rs","empty.rs","futures_ordered.rs","iter.rs","mod.rs","once.rs","pending.rs","poll_fn.rs","poll_immediate.rs","repeat.rs","repeat_with.rs","select.rs","select_all.rs","select_with_strategy.rs","unfold.rs"]},{"name":"task","files":["mod.rs","spawn.rs"]}],"files":["abortable.rs","fns.rs","lib.rs","never.rs","unfold_state.rs"]};
sourcesIndex["gdbstub"] = {"name":"","dirs":[{"name":"connection","dirs":[{"name":"impls","files":["boxed.rs","mod.rs","tcpstream.rs","unixstream.rs"]}],"files":["mod.rs"]},{"name":"gdbstub_impl","dirs":[{"name":"ext","files":["base.rs","breakpoints.rs","extended_mode.rs","mod.rs","monitor_cmd.rs","reverse_exec.rs","section_offsets.rs","single_register_access.rs"]}],"files":["builder.rs","error.rs","mod.rs","target_result_ext.rs"]},{"name":"internal","files":["be_bytes.rs","dead_code_marker.rs","le_bytes.rs","mod.rs"]},{"name":"protocol","dirs":[{"name":"commands","files":["_QDisableRandomization.rs","_QEnvironmentHexEncoded.rs","_QEnvironmentReset.rs","_QEnvironmentUnset.rs","_QSetWorkingDir.rs","_QStartNoAckMode.rs","_QStartupWithShell.rs","_bc.rs","_bs.rs","_c.rs","_d_upcase.rs","_g.rs","_g_upcase.rs","_h_upcase.rs","_k.rs","_m.rs","_m_upcase.rs","_p.rs","_p_upcase.rs","_qAttached.rs","_qOffsets.rs","_qRcmd.rs","_qSupported.rs","_qXfer_features_read.rs","_qfThreadInfo.rs","_qsThreadInfo.rs","_r_upcase.rs","_s.rs","_t_upcase.rs","_vAttach.rs","_vCont.rs","_vKill.rs","_vRun.rs","breakpoint.rs","exclamation_mark.rs","question_mark.rs"]},{"name":"common","files":["hex.rs","mod.rs","thread_id.rs"]}],"files":["commands.rs","console_output.rs","mod.rs","packet.rs","response_writer.rs"]},{"name":"target","dirs":[{"name":"ext","dirs":[{"name":"base","files":["mod.rs","multithread.rs","single_register_access.rs","singlethread.rs"]}],"files":["breakpoints.rs","extended_mode.rs","mod.rs","monitor_cmd.rs","section_offsets.rs","target_description_xml_override.rs"]}],"files":["mod.rs"]},{"name":"util","files":["managed_vec.rs","mod.rs"]}],"files":["arch.rs","common.rs","lib.rs"]};
sourcesIndex["gdbstub_arch"] = {"name":"","dirs":[{"name":"arm","dirs":[{"name":"reg","files":["arm_core.rs","id.rs","mod.rs"]}],"files":["mod.rs"]},{"name":"mips","dirs":[{"name":"reg","files":["id.rs","mips.rs","mod.rs"]}],"files":["mod.rs"]},{"name":"msp430","dirs":[{"name":"reg","files":["id.rs","mod.rs","msp430.rs"]}],"files":["mod.rs"]},{"name":"ppc","dirs":[{"name":"reg","files":["common.rs","id.rs","mod.rs"]}],"files":["mod.rs"]},{"name":"riscv","dirs":[{"name":"reg","files":["id.rs","mod.rs","riscv.rs"]}],"files":["mod.rs"]},{"name":"x86","dirs":[{"name":"reg","files":["core32.rs","core64.rs","id.rs","mod.rs"]}],"files":["mod.rs"]}],"files":["lib.rs"]};
sourcesIndex["getrandom"] = {"name":"","files":["error.rs","lib.rs","linux_android.rs","use_file.rs","util.rs","util_libc.rs"]};
sourcesIndex["gpu_display"] = {"name":"","dirs":[{"name":"generated","files":["xlib.rs"]},{"name":"keycode_converter","files":["data.rs","mod.rs"]}],"files":["dwl.rs","event_device.rs","gpu_display_stub.rs","gpu_display_wl.rs","gpu_display_x.rs","lib.rs"]};
sourcesIndex["heck"] = {"name":"","files":["camel.rs","kebab.rs","lib.rs","mixed.rs","shouty_kebab.rs","shouty_snake.rs","snake.rs","title.rs"]};
sourcesIndex["hypervisor"] = {"name":"","dirs":[{"name":"kvm","files":["mod.rs","x86_64.rs"]}],"files":["caps.rs","lib.rs","x86_64.rs"]};
sourcesIndex["intrusive_collections"] = {"name":"","files":["adapter.rs","key_adapter.rs","lib.rs","link_ops.rs","linked_list.rs","pointer_ops.rs","rbtree.rs","singly_linked_list.rs","unchecked_option.rs","unsafe_ref.rs","xor_linked_list.rs"]};
sourcesIndex["io_uring"] = {"name":"","files":["bindings.rs","lib.rs","syscalls.rs","uring.rs"]};
sourcesIndex["itoa"] = {"name":"","files":["lib.rs","udiv128.rs"]};
sourcesIndex["kernel_cmdline"] = {"name":"","files":["kernel_cmdline.rs"]};
sourcesIndex["kernel_loader"] = {"name":"","files":["elf.rs","lib.rs"]};
sourcesIndex["kvm"] = {"name":"","files":["cap.rs","lib.rs"]};
sourcesIndex["kvm_sys"] = {"name":"","dirs":[{"name":"x86","files":["bindings.rs"]}],"files":["lib.rs"]};
sourcesIndex["libc"] = {"name":"","dirs":[{"name":"unix","dirs":[{"name":"linux_like","dirs":[{"name":"linux","dirs":[{"name":"arch","dirs":[{"name":"generic","files":["mod.rs"]}],"files":["mod.rs"]},{"name":"gnu","dirs":[{"name":"b64","dirs":[{"name":"x86_64","files":["align.rs","mod.rs","not_x32.rs"]}],"files":["mod.rs"]}],"files":["align.rs","mod.rs"]}],"files":["align.rs","mod.rs","non_exhaustive.rs"]}],"files":["mod.rs"]}],"files":["align.rs","mod.rs"]}],"files":["fixed_width_ints.rs","lib.rs","macros.rs"]};
sourcesIndex["libcras"] = {"name":"","files":["libcras.rs"]};
sourcesIndex["linux_input_sys"] = {"name":"","files":["lib.rs"]};
sourcesIndex["log"] = {"name":"","files":["lib.rs","macros.rs"]};
sourcesIndex["managed"] = {"name":"","files":["lib.rs","object.rs","slice.rs","slotmap.rs"]};
sourcesIndex["memchr"] = {"name":"","dirs":[{"name":"memchr","dirs":[{"name":"x86","files":["avx.rs","mod.rs","sse2.rs"]}],"files":["fallback.rs","iter.rs","mod.rs","naive.rs"]},{"name":"memmem","dirs":[{"name":"prefilter","dirs":[{"name":"x86","files":["avx.rs","mod.rs","sse.rs"]}],"files":["fallback.rs","genericsimd.rs","mod.rs"]},{"name":"x86","files":["avx.rs","mod.rs","sse.rs"]}],"files":["byte_frequencies.rs","genericsimd.rs","mod.rs","rabinkarp.rs","rarebytes.rs","twoway.rs","util.rs","vector.rs"]}],"files":["cow.rs","lib.rs"]};
sourcesIndex["memoffset"] = {"name":"","files":["lib.rs","offset_of.rs","raw_field.rs","span_of.rs"]};
sourcesIndex["minijail"] = {"name":"","files":["lib.rs"]};
sourcesIndex["minijail_sys"] = {"name":"","files":["lib.rs","libminijail.rs"]};
sourcesIndex["net_sys"] = {"name":"","files":["if_tun.rs","iff.rs","inn.rs","lib.rs","sockios.rs"]};
sourcesIndex["net_util"] = {"name":"","files":["lib.rs"]};
sourcesIndex["num_traits"] = {"name":"","dirs":[{"name":"ops","files":["checked.rs","inv.rs","mod.rs","mul_add.rs","overflowing.rs","saturating.rs","wrapping.rs"]}],"files":["bounds.rs","cast.rs","float.rs","identities.rs","int.rs","lib.rs","macros.rs","pow.rs","sign.rs"]};
sourcesIndex["once_cell"] = {"name":"","files":["imp_std.rs","lib.rs","race.rs"]};
sourcesIndex["p9"] = {"name":"","dirs":[{"name":"protocol","files":["messages.rs","mod.rs","wire_format.rs"]},{"name":"server","files":["mod.rs"]}],"files":["lib.rs"]};
sourcesIndex["paste"] = {"name":"","files":["attr.rs","error.rs","lib.rs","segment.rs"]};
sourcesIndex["pin_project_lite"] = {"name":"","files":["lib.rs"]};
sourcesIndex["pin_utils"] = {"name":"","files":["lib.rs","projection.rs","stack_pin.rs"]};
sourcesIndex["poll_token_derive"] = {"name":"","files":["poll_token_derive.rs"]};
sourcesIndex["power_monitor"] = {"name":"","files":["lib.rs"]};
sourcesIndex["proc_macro2"] = {"name":"","files":["detection.rs","fallback.rs","lib.rs","marker.rs","parse.rs","wrapper.rs"]};
sourcesIndex["protobuf"] = {"name":"","dirs":[{"name":"json","files":["json_name.rs","mod.rs"]},{"name":"reflect","dirs":[{"name":"acc","files":["mod.rs","v1.rs"]},{"name":"accessor","files":["mod.rs"]},{"name":"rt","files":["mod.rs"]}],"files":["enums.rs","field.rs","find_message_or_enum.rs","map.rs","message.rs","mod.rs","optional.rs","repeated.rs","value.rs"]},{"name":"text_format","dirs":[{"name":"lexer","files":["float.rs","json_number_lit.rs","lexer_impl.rs","loc.rs","mod.rs","num_lit.rs","parser_language.rs","str_lit.rs","token.rs"]}],"files":["mod.rs","print.rs"]},{"name":"well_known_types","files":["any.rs","api.rs","duration.rs","empty.rs","field_mask.rs","mod.rs","source_context.rs","struct_pb.rs","timestamp.rs","type_pb.rs","wrappers.rs"]},{"name":"well_known_types_util","files":["any.rs","mod.rs"]}],"files":["buf_read_iter.rs","cached_size.rs","clear.rs","coded_input_stream.rs","coded_output_stream.rs","compiler_plugin.rs","descriptor.rs","descriptorx.rs","enums.rs","error.rs","ext.rs","lazy.rs","lazy_v2.rs","lib.rs","message.rs","misc.rs","plugin.rs","repeated.rs","rt.rs","rust.rs","rustproto.rs","singular.rs","strx.rs","types.rs","unknown.rs","varint.rs","wire_format.rs","zigzag.rs"]};
sourcesIndex["protos"] = {"name":"","files":["lib.rs","plugin.rs"]};
sourcesIndex["quote"] = {"name":"","files":["ext.rs","format.rs","ident_fragment.rs","lib.rs","runtime.rs","spanned.rs","to_tokens.rs"]};
sourcesIndex["remain"] = {"name":"","files":["atom.rs","check.rs","compare.rs","emit.rs","format.rs","lib.rs","parse.rs","visit.rs"]};
sourcesIndex["remove_dir_all"] = {"name":"","files":["lib.rs"]};
sourcesIndex["resources"] = {"name":"","files":["address_allocator.rs","lib.rs","system_allocator.rs"]};
sourcesIndex["rutabaga_gfx"] = {"name":"","dirs":[{"name":"cross_domain","files":["cross_domain.rs","cross_domain_protocol.rs","mod.rs"]},{"name":"generated","files":["mod.rs","virgl_renderer_bindings.rs"]},{"name":"rutabaga_gralloc","files":["formats.rs","gralloc.rs","minigbm.rs","minigbm_bindings.rs","mod.rs","rendernode.rs","system_gralloc.rs"]}],"files":["gfxstream.rs","lib.rs","macros.rs","renderer_utils.rs","rutabaga_2d.rs","rutabaga_core.rs","rutabaga_utils.rs","virgl_renderer.rs"]};
sourcesIndex["ryu"] = {"name":"","dirs":[{"name":"buffer","files":["mod.rs"]},{"name":"pretty","files":["exponent.rs","mantissa.rs","mod.rs"]}],"files":["common.rs","d2s.rs","d2s_full_table.rs","d2s_intrinsics.rs","digit_table.rs","f2s.rs","f2s_intrinsics.rs","lib.rs"]};
sourcesIndex["serde"] = {"name":"","dirs":[{"name":"de","files":["ignored_any.rs","impls.rs","mod.rs","seed.rs","utf8.rs","value.rs"]},{"name":"private","files":["de.rs","doc.rs","mod.rs","ser.rs","size_hint.rs"]},{"name":"ser","files":["fmt.rs","impls.rs","impossible.rs","mod.rs"]}],"files":["integer128.rs","lib.rs","macros.rs"]};
sourcesIndex["serde_derive"] = {"name":"","dirs":[{"name":"internals","files":["ast.rs","attr.rs","case.rs","check.rs","ctxt.rs","mod.rs","receiver.rs","respan.rs","symbol.rs"]}],"files":["bound.rs","de.rs","dummy.rs","fragment.rs","lib.rs","pretend.rs","ser.rs","try.rs"]};
sourcesIndex["serde_json"] = {"name":"","dirs":[{"name":"features_check","files":["mod.rs"]},{"name":"io","files":["mod.rs"]},{"name":"value","files":["de.rs","from.rs","index.rs","mod.rs","partial_eq.rs","ser.rs"]}],"files":["de.rs","error.rs","iter.rs","lib.rs","macros.rs","map.rs","number.rs","read.rs","ser.rs"]};
sourcesIndex["slab"] = {"name":"","files":["lib.rs"]};
sourcesIndex["smallvec"] = {"name":"","files":["lib.rs"]};
sourcesIndex["syn"] = {"name":"","dirs":[{"name":"gen","files":["clone.rs","gen_helper.rs","visit_mut.rs"]}],"files":["attr.rs","await.rs","bigint.rs","buffer.rs","custom_keyword.rs","custom_punctuation.rs","data.rs","derive.rs","discouraged.rs","error.rs","export.rs","expr.rs","ext.rs","file.rs","generics.rs","group.rs","ident.rs","item.rs","lib.rs","lifetime.rs","lit.rs","lookahead.rs","mac.rs","macros.rs","op.rs","parse.rs","parse_macro_input.rs","parse_quote.rs","pat.rs","path.rs","print.rs","punctuated.rs","reserved.rs","sealed.rs","span.rs","spanned.rs","stmt.rs","thread.rs","token.rs","ty.rs","verbatim.rs","whitespace.rs"]};
sourcesIndex["sync"] = {"name":"","files":["condvar.rs","lib.rs","mutex.rs"]};
sourcesIndex["sys_util"] = {"name":"","dirs":[{"name":"linux","files":["mod.rs","syslog.rs"]}],"files":["alloc.rs","capabilities.rs","clock.rs","descriptor.rs","descriptor_reflection.rs","errno.rs","eventfd.rs","external_mapping.rs","file_flags.rs","file_traits.rs","fork.rs","get_filesystem_type.rs","handle_eintr.rs","ioctl.rs","lib.rs","mmap.rs","net.rs","netlink.rs","poll.rs","priority.rs","rand.rs","raw_fd.rs","read_dir.rs","sched.rs","scoped_path.rs","scoped_signal_handler.rs","seek_hole.rs","shm.rs","signal.rs","signalfd.rs","sock_ctrl_msg.rs","syslog.rs","terminal.rs","timerfd.rs","vsock.rs","write_zeroes.rs"]};
sourcesIndex["tempfile"] = {"name":"","dirs":[{"name":"file","dirs":[{"name":"imp","files":["mod.rs","unix.rs"]}],"files":["mod.rs"]}],"files":["dir.rs","error.rs","lib.rs","spooled.rs","util.rs"]};
sourcesIndex["thiserror"] = {"name":"","files":["aserror.rs","display.rs","lib.rs"]};
sourcesIndex["thiserror_impl"] = {"name":"","files":["ast.rs","attr.rs","expand.rs","fmt.rs","generics.rs","lib.rs","prop.rs","valid.rs"]};
sourcesIndex["tpm2"] = {"name":"","files":["lib.rs"]};
sourcesIndex["tpm2_sys"] = {"name":"","files":["lib.rs"]};
sourcesIndex["unicode_segmentation"] = {"name":"","files":["grapheme.rs","lib.rs","sentence.rs","tables.rs","word.rs"]};
sourcesIndex["unicode_xid"] = {"name":"","files":["lib.rs","tables.rs"]};
sourcesIndex["usb_sys"] = {"name":"","files":["lib.rs"]};
sourcesIndex["usb_util"] = {"name":"","files":["descriptor.rs","device.rs","error.rs","lib.rs","types.rs"]};
sourcesIndex["uuid"] = {"name":"","dirs":[{"name":"adapter","files":["mod.rs"]},{"name":"builder","files":["error.rs","mod.rs"]},{"name":"parser","files":["error.rs","mod.rs"]}],"files":["error.rs","lib.rs","prelude.rs","v4.rs"]};
sourcesIndex["vfio_sys"] = {"name":"","files":["lib.rs","plat.rs","vfio.rs"]};
sourcesIndex["vhost"] = {"name":"","files":["lib.rs","net.rs","vsock.rs"]};
sourcesIndex["virtio_sys"] = {"name":"","files":["lib.rs","vhost.rs","virtio_net.rs","virtio_ring.rs"]};
sourcesIndex["vm_control"] = {"name":"","files":["client.rs","gdb.rs","lib.rs"]};
sourcesIndex["vm_memory"] = {"name":"","files":["guest_address.rs","guest_memory.rs","lib.rs"]};
sourcesIndex["vmm_vhost"] = {"name":"","dirs":[{"name":"connection","files":["socket.rs"]}],"files":["backend.rs","connection.rs","lib.rs","master.rs","master_req_handler.rs","message.rs","slave.rs","slave_fs_cache.rs","slave_req_handler.rs"]};
sourcesIndex["wire_format_derive"] = {"name":"","files":["wire_format_derive.rs"]};
sourcesIndex["x86_64"] = {"name":"","files":["acpi.rs","bootparam.rs","bzimage.rs","cpuid.rs","fdt.rs","gdt.rs","interrupts.rs","lib.rs","mpspec.rs","mptable.rs","msr_index.rs","regs.rs","smbios.rs"]};
createSourceSidebar();
