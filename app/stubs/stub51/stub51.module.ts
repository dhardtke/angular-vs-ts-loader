import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub51Component} from "./stub51.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub51Component
        }])
    ],
    declarations: [
        Stub51Component
    ]
})
export class Stub51Module {

}
