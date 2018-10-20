import os
import sys
COUNT = 1000

os.chdir(os.path.dirname(sys.argv[0]))
os.chdir("../app")
os.mkdir("stubs")
os.chdir("stubs")

TYPESCRIPT = """import {Component} from "@angular/core";

@Component({
    selector: "$lower$-component",
    templateUrl: "./$lower$.component.html"
})
export class $upper$Component {
}
"""

MODULE = """import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {$upper$Component} from "./$lower$.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: $upper$Component
        }])
    ],
    declarations: [
        $upper$Component
    ]
})
export class $upper$Module {

}
"""

for i in range(COUNT):
    folder = "stub%d" % i
    os.makedirs(folder)
    os.chdir(folder)
    with open("%s.component.ts" % folder, "w") as f:
        f.write(TYPESCRIPT.replace("$lower$", folder).replace("$upper$", folder.title()))
    with open("%s.component.html" % folder, "w") as f:
        f.write(folder.title() + "\n")
    with open("%s.module.ts" % folder, "w") as f:
        f.write(MODULE.replace("$lower$", folder).replace("$upper$", folder.title()))
    os.chdir("..")

def construct_route(n):
    return """
        {
            path: "stub%d",
            loadChildren: "./stub%d/stub%d.module#Stub%dModule"
        }""" % (n, n, n, n)

with open("stub-routing.module.ts", "w") as f:
    f.write("""import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        RouterModule.forChild([%s
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class StubRoutingModule {
}
""" % ",".join([construct_route(i) for i in range(COUNT)]))