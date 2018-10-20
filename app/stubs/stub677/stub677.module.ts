import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub677Component} from "./stub677.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub677Component
        }])
    ],
    declarations: [
        Stub677Component
    ]
})
export class Stub677Module {

}
