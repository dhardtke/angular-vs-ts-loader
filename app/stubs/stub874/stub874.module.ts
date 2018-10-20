import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub874Component} from "./stub874.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub874Component
        }])
    ],
    declarations: [
        Stub874Component
    ]
})
export class Stub874Module {

}
