import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub664Component} from "./stub664.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub664Component
        }])
    ],
    declarations: [
        Stub664Component
    ]
})
export class Stub664Module {

}
