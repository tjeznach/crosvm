(function() {var implementors = {};
implementors["devices"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.u8.html\">u8</a>&gt; for <a class=\"enum\" href=\"devices/enum.PciClassCode.html\" title=\"enum devices::PciClassCode\">PciClassCode</a>","synthetic":false,"types":["devices::pci::pci_configuration::PciClassCode"]}];
implementors["hypervisor"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'a <a class=\"enum\" href=\"hypervisor/caps/enum.HypervisorCap.html\" title=\"enum hypervisor::caps::HypervisorCap\">HypervisorCap</a>&gt; for <a class=\"enum\" href=\"kvm/cap/enum.Cap.html\" title=\"enum kvm::cap::Cap\">Cap</a>","synthetic":false,"types":["kvm::cap::Cap"]}];
implementors["sys_util"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'_ (dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/std/os/fd/raw/trait.AsRawFd.html\" title=\"trait std::os::fd::raw::AsRawFd\">AsRawFd</a> + '_)&gt; for <a class=\"struct\" href=\"sys_util/struct.SafeDescriptor.html\" title=\"struct sys_util::SafeDescriptor\">SafeDescriptor</a>","synthetic":false,"types":["sys_util::descriptor::SafeDescriptor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.i32.html\">i32</a>&gt; for <a class=\"enum\" href=\"sys_util/signal/enum.Signal.html\" title=\"enum sys_util::signal::Signal\">Signal</a>","synthetic":false,"types":["sys_util::signal::Signal"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()