import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub484Component} from "./stub484.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub484Component
        }])
    ],
    declarations: [
        Stub484Component
    ]
})
export class Stub484Module {

}
